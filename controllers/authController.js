const { refreshToken, generateToken } = require('../utils/token');

exports.login = (req, res) => {
    // Mock user authentication, in real world this should be replaced with your own logic
    const { username, password } = req.body;
    const { id, name } = {
        id: 1,
        name: 'Localhost Administrator',
    };
    if (username === 'admin' && password === 'password') {
        const token = generateToken({ id: id, name: name, username: username });
        res.json({ token: token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

exports.register = (req, res) => {
    // Register user
};

exports.refresh = (req, res) => {
    // Refresh token
    const token = refreshToken(req.headers.authorization);
    res.json({ token: token });
};

exports.test = (req, res) => {
    const token = generateToken({ message: 'hello' });
    res.json({ token: token });
};
