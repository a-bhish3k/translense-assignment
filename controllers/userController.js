const Business = require("../models/businessModel");
const Owner = require("../models/ownerModel");

const addBusinessInfo = async (req, res) => {
  const businessInfo = req.body;
  const newBusiness = new Business(businessInfo);

  try {
    const nameExist = await Business.findOne({
      email: businessInfo.email,
    });

    if (nameExist) {
      return res.status(400).json("Email already exist");
    }

    await newBusiness.save();
    return res.status(201).json({ message: "New Business Added", newBusiness });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const addOwnerInfo = async (req, res) => {
  const ownerInfo = req.body;
  const newOwner = new Owner(ownerInfo);

  try {
    const nameExist = await Owner.findOne({
      email: ownerInfo.email,
    });

    if (nameExist) {
      return res.status(400).json("Email already exist");
    }

    await newOwner.save();
    return res.status(201).json({ message: "New Owner Added", newOwner });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { addBusinessInfo, addOwnerInfo };
