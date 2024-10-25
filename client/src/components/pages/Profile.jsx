import React, { useState, useEffect } from 'react';
import { Activity, Book, Award, Users, Upload } from 'lucide-react';
import { useLocation, useParams } from 'react-router-dom';
import { 
  Button, 
  TextField, 
  Snackbar, 
  CircularProgress, 
  Card, 
  CardContent, 
  Typography 
} from '@mui/material';
import { motion } from 'framer-motion';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';

const DashboardLayout = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });
  const [loading, setLoading] = useState(true);
  const [userNotFound, setUserNotFound] = useState(false);
  const { userId } = useParams();
  const dummyData = {
    username: 'abhi0052',
    plan: 'Free',
    cubes: 60,
    weeklyStreak: 0,
    maxStreak: 30,
    stats: [
      { name: 'Offensive', value: '0.00%', color: 'text-[#d48ff9]' },
      { name: 'Defensive', value: '0.00%', color: 'text-[#b25ffb]' },
      { name: 'General', value: '0.00%', color: 'text-[#6300ff]' },
    ],
  };

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/user/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setWishlist(data.wishlist);
        } else if (response.status === 404) {
          setUserNotFound(true);
        } else {
          console.error("Failed to fetch wishlist:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWishlist();
  }, [userId]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploading(true);
      try {
        const fileRef = ref(storage, `profilePictures/${file.name}`);
        await uploadBytes(fileRef, file);
        const downloadURL = await getDownloadURL(fileRef);
        
        setProfilePic(downloadURL);
        setSnackbar({ open: true, message: 'Profile picture updated successfully!' });
        await fetch(`http://localhost:8080/api/user/${userId}/profile-pic`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ profilePic: downloadURL }),
        });
        
      } catch (error) {
        console.error('Error uploading file:', error);
        setSnackbar({ open: true, message: 'Error uploading file. Please try again.' });
      } finally {
        setUploading(false);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#000746] text-white">
        <CircularProgress className="text-[#6300ff]" />
      </div>
    );
  }

  if (userNotFound) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#000746] text-white text-center">
        <div>
          <Typography variant="h5" className="mb-4">
            User not found. Please sign up or sign in to view your profile.
          </Typography>
          <Button 
            variant="contained" 
            className="bg-[#6300ff] hover:bg-[#6300ff] text-black" 
          >
            Sign Up
          </Button>
          <Button 
            variant="contained" 
            className="bg-[#b25ffb] hover:bg-[#b25ffb] text-black ml-2" 
          >
            Sign In
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#000746] text-white overflow-hidden">
      <motion.div 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-[#0a0d36] p-5 shadow-lg"
      >
        <div className="mb-8 text-center">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full bg-[#d48ff9] mx-auto overflow-hidden">
              {profilePic ? (
                <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold">
                  {dummyData.username[0].toUpperCase()}
                </div>
              )}
            </div>
            <label htmlFor="profile-upload" className="absolute bottom-0 right-0 w-8 h-8 bg-[#b25ffb] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#6300ff] transition-colors duration-300">
              <Upload size={16} />
            </label>
            <input 
              id="profile-upload" 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleFileUpload}
            />
          </div>
          <h2 className="mt-4 text-xl font-semibold">{dummyData.username}</h2>
        </div>
        <nav>
          <ul className="space-y-2">
            {[{ icon: Activity, label: 'Dashboard' }, { icon: Book, label: 'Exams' }, { icon: Award, label: 'Modules' }, { icon: Users, label: 'Paths' }].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded p-2 flex items-center cursor-pointer transition-colors duration-300 ${index === 0 ? 'bg-[#b25ffb]' : 'hover:bg-[#1a1f6d]'}`}
              >
                <item.icon size={18} className="mr-2" />
                {item.label}
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>

      <div className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            DASHBOARD
          </motion.h1>
          <div className="text-gray-400">Pages / Dashboard</div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {dummyData.stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#0a0d36] text-white">
                <CardContent className="text-center bg-[#1a1f6d]">
                  <Typography variant="h4" className={`font-bold ${stat.color}`}>
                    {stat.value}
                  </Typography>
                  <Typography variant="subtitle1" className="mt-2 text-gray-400">
                    {stat.name}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="bg-[#0a0d36] text-white">
              <CardContent className='bg-[#1a1f6d]'>
                <Typography variant="h6" className="font-semibold">
                  Your Wishlist
                </Typography>
                <ul className="mt-4">
                  {wishlist.length > 0 ? (
                    wishlist.map((item, index) => (
                      <li key={index} className="border-b border-gray-600 py-2">
                        {item.name} - {item.price} INR
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-400">No items in wishlist.</li>
                  )}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
      />
    </div>
  );
};

export default DashboardLayout;
