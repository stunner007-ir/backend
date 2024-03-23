const Pair = require("../models/Pair");

/* All Pairs Data */

exports.pairs = async (req, res) => {
  try {
    const pairs = await Pair.find();

    if (!pairs) {
      return res.status(400).json({
        success: false,
        message: "Could Not get the All Pairs Details ",
      });
    }

    return res.status(200).json({
      success: true,
      pairs,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Could Not get the all Pairs Details ",
    });
  }
};

/* Price */

exports.price = async (req, res) => {
  try {
    const pairs = await Pair.find();

    if (!pairs || pairs.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Could not get Price Details",
      });
    }
    // Extract Price Data ("priceNative",  "priceUsd","priceChange" ) from each pair
    const PriceData = pairs.map((pair) => ({
      priceNative: pair.priceNative,
      priceUsd: pair.priceUsd,
      priceChange: pair.priceChange,
    }));

    return res.status(200).json({
      success: true,
      PriceData: PriceData,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Could not get volume data",
    });
  }
};

/* Volume */

exports.volume = async (req, res) => {
  try {
    const pairs = await Pair.find();

    if (!pairs) {
      return res.status(400).json({
        success: false,
        message: "Could not get volume data",
      });
    }

    // Extract volume data from each pair
    const volumeData = pairs.map((pair) => pair.volume);

    return res.status(200).json({
      success: true,
      Volume: volumeData,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Could not get volume data",
    });
  }
};
