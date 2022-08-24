const news = [
  {
    id: 1,
    image:
      "https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-home-box-1.jpg",
    category: "Messages-spa",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente labore aspernatur velit adipisci ipsam.",
    homeId: true,
  },
  {
    id: 2,
    image:
      "https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-home-box-2.jpg",
    category: "Natural-diet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente labore aspernatur velit adipisci ipsam.",
    homeId: true,
  },
  {
    id: 3,
    image:
      "https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-home-box-3.jpg",
    category: "Clean-enviroment",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente labore aspernatur velit adipisci ipsam.",
    homeId: true,
  },
  {
    id: 4,
    image:
      "https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-home-box-4.jpg",
    category: "Complex-tests",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente labore aspernatur velit adipisci ipsam.",
    homeId: true,
  },
  {
    id: 5,
    image:
      "https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-home-box-5.jpg",
    category: "Meditation",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente labore aspernatur velit adipisci ipsam.",
    homeId: true,
  },
  {
    id: 6,
    image:
      "https://images.wallpaperscraft.ru/image/single/kamni_svechi_aromaterapiya_spa_voda_bambuk_massazh_67321_320x480.jpg",
    category: "Messages-spa",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente labore aspernatur velit adipisci ipsam.",
  },
  {
    id: 7,
    image:
      "https://images.wallpaperscraft.ru/image/single/svechi_rozhdestvo_el_apelsiny_119548_320x480.jpg",
    category: "Natural-diet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente labore aspernatur velit adipisci ipsam.",
  },
  {
    id: 8,
    image:
      "https://images.wallpaperscraft.ru/image/single/vetki_listya_priroda_80816_320x480.jpg",
    category: "Clean-enviroment",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente labore aspernatur velit adipisci ipsam.",
  },
  {
    id: 9,
    image:
      "https://images.wallpaperscraft.ru/image/single/interer_dekor_vostochnyj_144749_320x480.jpg",
    category: "Complex-tests",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente labore aspernatur velit adipisci ipsam.",
  },
  {
    id: 10,
    image:
      "https://images.wallpaperscraft.ru/image/single/budda_buddizm_meditatsiya_trava_112087_320x480.jpg",
    category: "Meditation",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente labore aspernatur velit adipisci ipsam.",
  },
  {
    id: 11,
    image:
      "https://images.wallpaperscraft.ru/image/single/palma_bassejn_otdyh_160959_320x480.jpg",
    category: "Messages-spa",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente labore aspernatur velit adipisci ipsam.",
  },
  {
    id: 12,
    image:
      "https://images.wallpaperscraft.ru/image/single/frukty_derevo_ruka_teplitsa_115362_320x480.jpg",
    category: "Natural-diet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente labore aspernatur velit adipisci ipsam.",
  },
  {
    id: 13,
    image:
      "https://images.wallpaperscraft.ru/image/single/vetki_kusty_rasteniya_listya_priroda_87118_320x480.jpg",
    category: "Clean-enviroment",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente labore aspernatur velit adipisci ipsam.",
  },
  {
    id: 14,
    image:
      "https://images.wallpaperscraft.ru/image/single/komnata_kabinet_stol_stul_polki_39161_320x480.jpg",
    category: "Complex-tests",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente labore aspernatur velit adipisci ipsam.",
  },
  {
    id: 15,
    image:
      "https://images.wallpaperscraft.ru/image/single/kamni_balans_garmoniia_186095_320x480.jpg",
    category: "Meditation",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente labore aspernatur velit adipisci ipsam.",
  },
];

export const getProductsObject = (array) => {
  return array.reduce(
    (obj, product) => ({
      ...obj,
      [product.id]: product,
    }),
    {}
  );
};

export default news;
