const User = require('../models/User');

async function getUserProfile(req, res) {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ error: 'User not found.' });
    } else {
      const currentUserRole = req.user.role;
      // if (currentUserRole === 'admin' || currentUserRole === user.role) {
        res.json(user);
      // } else {
      //   res.status(403).json({ error: 'Access denied.' });
      // }
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function updateUserProfile(req, res) {
  const { id } = req.params;
  const { username, password } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ error: 'User not found.' });
    } else {
      const currentUserRole = req.user.role;
      if (currentUserRole === 'admin' || currentUserRole === user.role) {
        user.username = username;
        user.password = password;
        await user.save();
        res.json({ message: 'User updated successfully.', user });
      } else {
        res.status(403).json({ error: 'Access denied.' });
      }
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function deleteUserProfile(req, res) {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ error: 'User not found.' });
    } else {
      const currentUserRole = req.user.role;
      if (currentUserRole === 'admin' || currentUserRole === user.role) {
        await user.remove();
        res.json({ message: 'User deleted successfully.' });
      } else {
        res.status(403).json({ error: 'Access denied.' });
      }
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function addDelivery(userId, userDelivery) {

  try{
    const user = await User.findById(userId);

    if(!user){
      console.log("User not found");
      return 'User not found';
    }

    console.log(userDelivery);

    user.deliveries.push(userDelivery);

    await user.save();

    console.log(`Delivery added to user ${userId}`);
    return `Delivery added to user ${userId}`;
  } catch(error){
    console.log(error);
    return error;
  }

}

module.exports = {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  addDelivery
};
