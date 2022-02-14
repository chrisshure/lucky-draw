export interface PrizeProps {
  brand?: string;
  name: string;
  quantity: number;
  imgSrc: string;
  inMasonry?: boolean;
  group?: string;
}

export const Prizes: PrizeProps[] = [
  {
    brand: "Panasonic",
    name: "Digital Control Electric Oven",
    imgSrc:
      "http://www.panasonic.hk/usm.ashx/e/ax6Bgnt1zOKAv2fuNWSytwgPrBmKO49Lxb_RaRcn~9BCbzVPjle3U7lbsbcf47enbzizAyjtvlQ04Al1G~vQXVXAbiEivTXImyicZYYNu2m9wnGHZhEzrQtwlgYydaVGhY5nETRHaRT8h_vVPA~zbTCEBHnRuc5O6zCXQjnsXz4o",
    quantity: 2
  },
  {
    brand: "Shure",
    name: "AONIC Free Earphones (Red)",
    imgSrc:
      "https://products.shureweb.eu/cdn-cgi/image/height=1400,format=auto/shure_product_db/product_images/files/3e1/c83/32-/header_transparent/195eca52ae52b00a57fd7c2ed1bfdb2b.png",
    quantity: 2
  },
  {
    brand: "Shure",
    name: "MV7 Podcast Microphone Bundle",
    imgSrc:
      "https://products.shureweb.eu/cdn-cgi/image/height=1400,format=auto/shure_product_db/product_images/files/4d8/3a9/7b-/header_transparent/6458055643924787cfa96ea1c86ef0b9.png",
    quantity: 2
  },
  {
    brand: "Apple",
    name: "Watch Series 7 45mm (GPS+Cellular) - Green",
    imgSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MKUN3_VW_34FR+watch-45-alum-green-cell-7s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171062000%2C1631661631000",
    quantity: 1
  },
  {
    brand: "Apple",
    name: "Watch Series 7 45mm (GPS+Cellular) - Black",
    imgSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171067000%2C1631661671000",
    quantity: 1,
    inMasonry: false
  },
  {
    brand: "Parknshop",
    name: "Coupon $500 + White Wine",
    imgSrc: "https://i0.wp.com/www.tradeduck.com/uploads/43169_11973724.jpg",
    quantity: 3,
    inMasonry: true
  },
  {
    brand: "Nintendo",
    name: "Switch OLED",
    imgSrc:
      "https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_768/ncom/en_US/switch/site-design-update/photo01?v=2022021303",
    quantity: 2
  },
  {
    brand: "HKTVMall",
    name: "gift card $500 + White Wine",
    imgSrc:
      "http://images.hktvmall.com/h0001001/272914/h0001001_svc100jan_e7_211231100030_01_1200.jpg",
    quantity: 4
  },
  {
    brand: "Dyson",
    name: "V12 Deatect Slim Total Clean",
    imgSrc:
      "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/floorcare/sticks/v12-detected-slim/pdp/lifestyle/yellow/Yellow-Dynamic-Media.png?fmt=png-alpha&scl=1&fmt=png-alpha",
    quantity: 2
  },
  {
    brand: "Shure",
    name: "AONIC Free Earphones (Black)",
    imgSrc:
      "https://products.shureweb.eu/cdn-cgi/image/height=1400,format=auto/shure_product_db/product_images/files/4d4/ae4/8b-/header_transparent/4d1b2446ac56184f71c26c10e6c97a05.png",
    quantity: 2,
    inMasonry: false
  },
  {
    brand: "DJI",
    name: "Mini 2 Fly More Combo Drone",
    imgSrc:
      "https://www.fortress.com.hk/medias/DJI-Mini-2-Fly-More-12174921.jpg?context=bWFzdGVyfGZyb250em9vbXw5NTI1NHxpbWFnZS9qcGVnfGZyb250em9vbS9oYzEvaDkzLzk2MDE3Nzc0MzQ2NTQuanBnfDEyOGRjNzhjNGI4ZWE0NWI0NGIzOTYyMmM1NzE1MzdiZTMzYmY0MmQ4MjFlYWY2MTE5ZTk5OWIxOGZlODQyMGQ",
    quantity: 2
  },
  {
    brand: "Sogo",
    name: "Coupon $1000",
    imgSrc:
      "https://gphb01pdazurefileshare.blob.core.windows.net/sys-master-hybris-media/hd4/hb8/15282578751518/265272-sogo-voucher-700-1-800Wx800H",
    quantity: 3
  },
  {
    brand: "Apple",
    name: 'iPad Air 10.9" 256Gb (Green)',
    imgSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-green-202009?wid=940&hei=1112&fmt=png-alpha&.v=1598650644000",
    quantity: 1
  },
  {
    brand: "Apple",
    name: 'iPad Air 10.9" 256Gb (Blue)',
    imgSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-blue-202009?wid=940&hei=1112&fmt=png-alpha&.v=1598650644000",
    quantity: 1,
    inMasonry: false
  },
  {
    brand: "Bruno",
    name: "BAK802 Hot Soup Blender + White Wine",
    imgSrc:
      "https://www.fortress.com.hk/medias/12344361-12344361.jpg?context=bWFzdGVyfGZyb250cHJkfDEwNzYzOXxpbWFnZS9qcGVnfGZyb250cHJkL2g5Yy9oNzEvOTc1MDkxMDc5NTgwNi5qcGd8NzgyM2QwZDYzMTQ1YmY5NjYyMzljYjIxMGNhYmU4NDU4YmZlNGMwM2ExMGRjNDNjMzAxNjk0NTg4ODFhOTc2ZA",
    quantity: 2
  },
  {
    brand: "Ogawa",
    name: "Shoulder Massager",
    imgSrc:
      "https://ogawaworld.hk/wp-content/uploads/2020/12/wood_right-1200x1200.jpg",
    quantity: 2
  },
  {
    brand: "Mannings",
    name: "Coupons $800 + White Wine",
    imgSrc:
      "https://images.contentstack.io/v3/assets/blt2e2a6920a8eb4819/blt155ce2b2c6a5522a/5fafbeaf42256d5ffdf4350a/Mannings_logo_260x260.jpg",
    quantity: 5
  },
  {
    brand: "NESPRESSO",
    name: "C61 Pixie Capsule Coffee Machine",
    imgSrc:
      "https://www.builtinpro.hk/image/cachewebp/data/product/old/C60-SG-RE-NE-600x600.webp",
    quantity: 2
  },
  {
    brand: "Mannings",
    name: "Coupons $1000",
    imgSrc:
      "https://images.contentstack.io/v3/assets/blt2e2a6920a8eb4819/blt155ce2b2c6a5522a/5fafbeaf42256d5ffdf4350a/Mannings_logo_260x260.jpg",
    quantity: 4,
    inMasonry: false
  },
  {
    brand: "Dyson",
    name: "Supersonic™ hair dryer",
    imgSrc:
      "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/dynamic-media/personal-care/605/primary/primary-fuchsia-nickel.png?$responsive$&fmt=png-alpha&cropPathE=desktop&fit=stretch,1&wid=960",
    quantity: 2
  },
  {
    brand: "Dyson",
    name: "Purifier Hot+Cool Formaldehyde",
    imgSrc:
      "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/ec/527e/variants/sco/HP09_NKSGLD_Primary_800x1200.png?fmt=png-alpha&scl=1&fmt=png-alpha",
    quantity: 1
  },
  {
    brand: "Shure",
    name: "AONIC 50 Wireless Headphone (Black)",
    imgSrc:
      "https://products.shureweb.eu/cdn-cgi/image/height=1400,format=auto/shure_product_db/product_images/files/568/28c/a9-/header_transparent/9cde76c59348c9b9e022af31778596e6.png",
    quantity: 1
  },
  {
    brand: "Shure",
    name: "AONIC 50 Wireless Headphone (Brown)",
    imgSrc:
      "https://products.shureweb.eu/cdn-cgi/image/height=1400,format=auto/shure_product_db/product_images/files/3d6/aa7/1f-/header_transparent/318dd7e48948fdbb030a6a8a7c67cdb1.png",
    quantity: 1,
    inMasonry: false
  },
  {
    brand: "Shure",
    name: "AONIC 50 Wireless Headphone (White)",
    imgSrc:
      "https://products.shureweb.eu/cdn-cgi/image/height=1400,format=auto/shure_product_db/product_images/files/9be/d7e/55-/header_transparent/314cd4c0472efe7489d95ea5aba114c8.png",
    quantity: 1,
    inMasonry: false
  },
  {
    brand: "Apple",
    name: "iPad mini wifi 256GB (Purple)",
    imgSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-purple-202109?wid=940&hei=1112&fmt=png-alpha&.v=1629840735000",
    quantity: 1
  },
  {
    brand: "Apple",
    name: "iPad mini wifi 256GB (Starlight)",
    imgSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-starlight-202109?wid=940&hei=1112&fmt=png-alpha&.v=1629840745000",
    quantity: 1,
    inMasonry: false
  },
  {
    brand: "Tanita",
    name: "BC-402 Body Composition Monitor",
    imgSrc:
      "https://www.tanita.asia/product/images/yemian4_datuyulan_xiaotu3.png",
    quantity: 2
  },
  {
    brand: "Parknshop",
    name: "Coupon $500 + White Wine",
    imgSrc: "https://i0.wp.com/www.tradeduck.com/uploads/43169_11973724.jpg",
    quantity: 1,
    inMasonry: false
  },
  {
    brand: "Apple",
    name: "iPhone 13 Pro 512GB (Sierra Blue)",
    imgSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652955000",
    quantity: 1
  }
];
