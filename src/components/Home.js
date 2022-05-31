import React from 'react';
import { Link } from 'react-router-dom';
import socketService from '../services/socketService';

function Home() {
    const [room, setRoom] = React.useState('');

    const handleChange = (e) => {
        setRoom(e.target.value);    
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        socketService.joinRoom(room);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 mx-auto">
                    <div className="card card-body">
                        <h3 className="text-center mb-3">
                            Enter Room
                        </h3>
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Room Name"
                                    onChange={handleChange}
                                />
                            </div>
                            <button onClick={handleSubmit}>
                                <Link to={`/${room}`}>
                                    Enter
                                </Link>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;