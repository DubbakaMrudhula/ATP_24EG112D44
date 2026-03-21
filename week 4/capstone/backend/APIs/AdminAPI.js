import exp from 'express';
import { UserModel } from '../models/UserModel.js';
import { ArticleModel } from '../models/ArticleModel.js';
import { verifyToken } from '../middlewares/VerifyToken.js';

export const adminApp = exp.Router();

// Get all users (users and authors)
adminApp.get('/users', verifyToken('ADMIN'), async (req, res) => {
    try {
        // Fetch all users except admins to prevent accidental admin modification
        const usersList = await UserModel.find({ role: { $ne: 'ADMIN' } }).select('-password');
        res.status(200).json({ message: 'Users retrieved successfully', payload: usersList });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
});
// Update user active status ( ব্লক/ আনব্লক )
adminApp.put('/user/:id', verifyToken('ADMIN'), async (req, res) => {
    try {
        const userId = req.params.id;
        const { isUserActive } = req.body;

        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            { isUserActive },
            { new: true }
        ).select('-password');

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User status updated successfully', payload: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user status', error: error.message });
    }
});

// Get all articles
adminApp.get('/articles', verifyToken('ADMIN'), async (req, res) => {
    try {
        const articlesList = await ArticleModel.find();
        res.status(200).json({ message: 'Articles retrieved successfully', payload: articlesList });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving articles', error: error.message });
    }
});

// Update article active status
adminApp.put('/article/:id', verifyToken('ADMIN'), async (req, res) => {
    try {
        const articleId = req.params.id;
        const { isArticleActive } = req.body;

        const updatedArticle = await ArticleModel.findByIdAndUpdate(
            articleId,
            { isArticleActive },
            { new: true }
        );

        if (!updatedArticle) {
            return res.status(404).json({ message: 'Article not found' });
        }

        res.status(200).json({ message: 'Article status updated successfully', payload: updatedArticle });
    } catch (error) {
        res.status(500).json({ message: 'Error updating article status', error: error.message });
    }
});
