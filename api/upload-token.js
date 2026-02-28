import ImageKit from "imagekit";

export default function handler(req, res) {
  const imagekit = new ImageKit({
    publicKey: "public_d3ArQDMw7/fjt4Z3gsNsViVz8bc=",
    privateKey: "private_bDA4g97zCLowGA/SdYUcF76JkjY=",
    urlEndpoint: "https://ik.imagekit.io/tu_cuenta"
  });

  const authParams = imagekit.getAuthenticationParameters();
  res.status(200).json(authParams);
}