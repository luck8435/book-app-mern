import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreateBook from './components/CreateBook';
import ShowBookDetails from './components/ShowBookDetails.js';
import ShowBookList from './components/ShowBookList.js';
import UpdateBookInfo from './components/UpdateBookInfo';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path='/' element={<ShowBookList />} />
                    <Route path='/create-book' element={<CreateBook />} />
                    <Route path='/show-book/:id' element={<ShowBookDetails />} />
                    <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
