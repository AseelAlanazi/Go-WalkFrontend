import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react'


import Welcom from './pages/welcom'
import Signup from './pages/account/Signup'
import Login from './pages/account/Login'
import Places from './pages/Places'
import PlaceDetail from './pages/PlaceDetail'
import Favorites from './pages/Favorites/Favorites'
import AddFavorits from './pages/Favorites/AddFavorits'
import FavoritesDetail from './pages/Favorites/FavoritesDetail'
import EditFavorits from './pages/Favorites/EditFavorits'
import Review from './pages/Review'
import AddComment from './pages/Comment/AddComment'
import CommentDetail from './pages/Comment/CommentDetail'
import CommentEdit from './pages/Comment/CommentEdit'
import Home from './pages/Home'
import Goal from './pages/Goal'
import UpdateGoal from './pages/UpdateGoal'
import NotFound from './pages/NotFound'




export default function App() {
  return (

    <Router>
      <ToastContainer
      position="bottom-right"
      />
      <Routes>
        <Route path='/' element={<Welcom />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/goal' element={<Goal />}></Route>
        <Route path='/goal/update' element={<UpdateGoal toast={toast}/>}></Route>
        <Route path='/places' element={<Places />}></Route>
        <Route path='/places/:id' element={<PlaceDetail />}></Route>
        <Route path='/places/:id/comments' element={<Review />}></Route>
        <Route path='/places/:id/comments/:pk' element={<CommentDetail toast={toast} />}></Route>
        <Route path='/places/:id/comments/:pk/edit-comment' element={<CommentEdit toast={toast} />}></Route>
        <Route path='/places/:id/comments/add' element={<AddComment toast={toast} />}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
        <Route path='/favorites/add' element={<AddFavorits toast={toast} />}></Route>
        <Route path='/favorites/:id' element={<FavoritesDetail toast={toast} />}></Route>
        <Route path='/favorites/:id/edit' element={<EditFavorits  toast={toast}/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </Router>
  )
}
