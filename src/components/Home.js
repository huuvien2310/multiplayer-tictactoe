import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [room, setRoom] = React.useState('');

    const handleChange = (e) => {
        setRoom(e.target.value);
    }
    
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
                            <Link to={`/${room}`}>
                                <button className="btn btn-primary btn-block btn-lg">
                                    Enter
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;