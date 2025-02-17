import Trek from "../models/Trek.js";

// ✅ Get all treks
export const getTreks = async (req, res) => {
  try {
    const treks = await Trek.findAll();
    res.json(treks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get a single trek by ID
export const getTrek = async (req, res) => {
  try {
    const trek = await Trek.findByPk(req.params.id);
    if (!trek) return res.status(404).json({ error: "Trek not found" });
    res.json(trek);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Add a new trek
export const addTrek = async (req, res) => {
  try {
    const { name, image, description } = req.body;
    const newTrek = await Trek.create({ name, image, description });
    res.status(201).json(newTrek);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update a trek
export const updateTrek = async (req, res) => {
  try {
    const trek = await Trek.findByPk(req.params.id);
    if (!trek) return res.status(404).json({ error: "Trek not found" });

    await trek.update(req.body);
    res.json(trek);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete a trek
export const deleteTrek = async (req, res) => {
  try {
    const trek = await Trek.findByPk(req.params.id);
    if (!trek) return res.status(404).json({ error: "Trek not found" });

    await trek.destroy();
    res.json({ message: "Trek deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
