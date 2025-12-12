import User from "./userModel";

async function createUser(payload) {
  const newUser = new User(payload);
  return await newUser.save();
}

async function findUser(userId) {
  return await User.findOne({ userId });
}

async function updateUser(userId, updatedPayload) {
  return await User.findByIdAndUpdate(userId, updatedPayload, { new: true });
}

async function getAllUser(options) {
    const { sort, limit } = options;
  return await User.find({}).sort(sort).limit(limit);
}

async function deleteUser(userId) {
  return await User.findByIdAndDelete(userId);
}

export default {
    createUser,
    findUser,
    updateUser,
    getAllUser,
    deleteUser
};
