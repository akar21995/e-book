import { nanoid } from "nanoid";
import { createUser, findUser, getAllUser, deleteUser, updateUser } from "./userService";

exports.registerUser = (req, res) => {
    const newUser = req.body;
    const userId = nanoid();
    const createdUser = createUser({ ...newUser, userId });
    res.status(201).json({ message: "user created succesfully!", data: createdUser });
};

exports.getAllUser = (req, res) => {
    const { sort, limit } = req.body;
    const fetchedAllUser = getAllUser({ sort: sort || { _id: 1 }, limit: limit || 20 });
    res.status(201).json({ message: "all user fetched succesfully!", data: fetchedAllUser });
};

exports.updateUser = (req, res) => {
    const userId = req.params.userId;
    const updatedPayload = req.body;
    const updatedUser = updateUser(userId, updatedPayload);
    res.status(201).json({ message: "user updated succesfully!", data: updatedUser });
};

exports.deleteUser = (req, res) => {
    const userId = req.params.userId;
    deleteUser(userId);
    res.status(201).json({ message: "user removed succesfully!" });
};

exports.findUser = (req, res) => {
    const userId = req.params.userId;
    const userData = findUser(userId);
    res.status(201).json({ message: "user fecthed succesfully!", data: userData });
};