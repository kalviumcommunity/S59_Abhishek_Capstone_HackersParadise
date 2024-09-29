import React, { useState } from 'react';
import { Activity, Book, Award, Users, ShoppingCart, Upload } from 'lucide-react';
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

const DashboardLayout = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

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
    favoriteModules: [
      { name: 'Intro to Academy', progress: '', difficulty: 'Fundamental' },
      { name: 'Advanced Techniques', progress: '50%', difficulty: 'Intermediate' },
      { name: 'Expert Challenges', progress: '25%', difficulty: 'Advanced' },
    ],
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploading(true);
      setTimeout(() => {
        setProfilePic(URL.createObjectURL(file));
        setUploading(false);
        setSnackbar({ open: true, message: 'Profile picture updated successfully!' });
      }, 2000);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

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
          <p className="text-gray-400">{dummyData.plan}</p>
          <div className="mt-2 flex items-center justify-center">
          </div>
        </div>
        <nav>
          <ul className="space-y-2">
            {[
              { icon: Activity, label: 'Dashboard' },
              { icon: Book, label: 'Exams' },
              { icon: Award, label: 'Modules' },
              { icon: Users, label: 'Paths' },
            ].map((item, index) => (
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
                <Typography variant="h6" className="mb-4 text-white">Favorite Modules List</Typography>
                <div className="overflow-x-auto">
                  <table className="w-full text-white">
                    <thead>
                      <tr className="text-left text-white text-gray-400">
                        <th className="pb-2">Name</th>
                        <th className="pb-2">Progress</th>
                        <th className="pb-2">Difficulty</th>
                        <th className="pb-2"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {dummyData.favoriteModules.map((module, index) => (
                        <tr key={index} className="border-t border-gray-700">
                          <td className="py-3">{module.name}</td>
                          <td className="py-3">
                            {module.progress && (
                              <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div 
                                  className="bg-[#6300ff] h-2.5 rounded-full" 
                                  style={{ width: module.progress }}
                                ></div>
                              </div>
                            )}
                          </td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded text-xs ${
                              module.difficulty === 'Fundamental' ? 'bg-green-500 text-black' :
                              module.difficulty === 'Intermediate' ? 'bg-yellow-500 text-black' :
                              'bg-red-500 text-white'
                            }`}>
                              {module.difficulty}
                            </span>
                          </td>
                          <td className="py-3">
                            <Button variant="contained" className="bg-[#6300ff] hover:bg-[#6300ff]">
                              Start
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-[#0a0d36] text-white">
              <CardContent className='bg-[#6300ff]'>
                <Typography variant="h6" className="mb-4">
                  Weekly Streak <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs ml-2">BETA</span>
                </Typography>
                <Typography variant="subtitle2" className="text-gray-400 mb-2">This Week</Typography>
                <Typography variant="h4" className="mb-2">
                  {dummyData.weeklyStreak} <span className="text-gray-400 text-lg">/ {dummyData.maxStreak} Streak pts</span>
                </Typography>
                <div className="mt-8">
                  <Typography variant="subtitle1" className="font-semibold mb-2">Refer a friend</Typography>
                  <Typography variant="body2" className="text-gray-400 mb-4">
                    Refer a Friend, Earn Cubes, Unlock Academy Modules!
                  </Typography>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    className="bg-[#d48ff9] hover:bg-[#b25ffb] text-black"
                  >
                    Start Referring
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
        </motion.div>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
      />

      {uploading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <CircularProgress className="text-[#6300ff]" />
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;