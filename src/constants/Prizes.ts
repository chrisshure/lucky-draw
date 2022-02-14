export interface PrizeProps {
  brand?: string;
  name: string;
  quantity: number;
  imgSrc?: string;
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
    quantity: 1
  },
  {
    brand: "Parknshop",
    name: "Coupon $500 + White Wine",
    imgSrc:
      "data:image/png;base64,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",
    quantity: 3
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
    quantity: 2
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
      "https://mhksg2020.blob.core.windows.net/cmsstorage/sogo/media/sogo/common/sogo_logo_1200x630.jpg",
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
    quantity: 1
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
    name: "Coupons $1000 + White Wine",
    imgSrc:
      "https://images.contentstack.io/v3/assets/blt2e2a6920a8eb4819/blt155ce2b2c6a5522a/5fafbeaf42256d5ffdf4350a/Mannings_logo_260x260.jpg",
    quantity: 3
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
    quantity: 1
  },
  {
    brand: "Shure",
    name: "AONIC 50 Wireless Headphone (White)",
    imgSrc:
      "https://products.shureweb.eu/cdn-cgi/image/height=1400,format=auto/shure_product_db/product_images/files/9be/d7e/55-/header_transparent/314cd4c0472efe7489d95ea5aba114c8.png",
    quantity: 1
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
    quantity: 1
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
    imgSrc:
      "data:image/png;base64,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",
    quantity: 1
  },
  {
    brand: "Apple",
    name: "iPhone 13 Pro 512GB (Sierra Blue)",
    imgSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652955000",
    quantity: 1
  }
];
