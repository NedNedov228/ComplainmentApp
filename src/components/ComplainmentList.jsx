// Complains.jsx
import React, { useEffect, useState } from 'react';
import { getComplainments, addComplain, deleteComplain } from '../api/Service';

const ComplainmentList = () => {
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newComplaint, setNewComplaint] = useState({ description: '', status: 1 });

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const data = await getComplainments();
                setComplaints(data);
            } catch (err) {
                setError('Failed to fetch complaints');
            } finally {
                setLoading(false);
            }
        };

        fetchComplaints();
    }, []);

    const setStatus = (status) => {
        switch (status) {
            case 1:
                return 'Получено';
            case 2:
                return 'В обработке';
            case 3:
                return 'Завершено';
            default:
                return 'Неизвестно';
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewComplaint(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDeleteComplaint = async (id) => {
        const isDeleted = await deleteComplain(id);
        if (isDeleted) {
            setComplaints(prevComplaints => prevComplaints.filter(complaint => complaint.id !== id));
        } else {
            setError('Failed to delete complaint');
        }
    };

    const handleAddComplaint = async (e) => {
        e.preventDefault();
        try {
            const addedComplaint = await addComplain(newComplaint.description, newComplaint.status);
            if (addedComplaint) {
                setComplaints(prevComplaints => [...prevComplaints, addedComplaint]);
                setNewComplaint({ description: '', status: 1 });
            } else {
                setError('Failed to add complaint');
            }
        } catch (err) {
            setError('An error occurred while adding the complaint');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <form onSubmit={handleAddComplaint}>
                <input
                    type="text"
                    name="description"
                    value={newComplaint.description}
                    onChange={handleInputChange}
                    placeholder="Описание"
                    required
                />
                
                <button className='btn' type="submit">Отправить Заявление</button>
            </form>
            <div className="divider"></div>
            {complaints.length === 0 ? (
                <p>Заявлений не найдено.</p>
            ) : (
                <table>
                    <tr>
                        <th><h2>Номер</h2></th>
                        <th><h2>Описание</h2></th>
                        <th><h2>Статус</h2></th>
                        <th></th>
                    </tr>
                    {complaints.map(complaint => (
                        <tr key={complaint.id}>
                            <th>{"GH234687"+complaint.id}</th>
                            <th>{complaint.description}</th>
                            <th>{setStatus(complaint.status)}</th>
                            <th><button onClick={() => handleDeleteComplaint(complaint.id)} className='btn btn-danger'>Удалить Заявление</button></th>
                        </tr>
                    ))}
                </table>
            )}
        </div>
    );
};

export default ComplainmentList;