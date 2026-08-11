export interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  isEgg?: boolean;
  isBestseller?: boolean;
  serves?: string;
  portion?: string;
  variant?: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: "🔥 Value Combos",
    items: [
      {
        name: "Corporate Lunch Box",
        description:
          "[Serves 1] Your choice of Classic, Kolkata, Hyderabadi or Lucknowi Chicken Biryani, paired with a chilled Coke for a complete and satisfying meal.",
        price: 279,
        image: "/corporate-lunchbox.png",
        isVeg: false,
        isBestseller: true,
        serves: "Serves 1",
        portion: "4 boneless chicken pieces + Coke (250ml)",
      },
      {
        name: "The Solo Feast",
        description:
          "[Serves 1] Your favourite Chicken Biryani Bowl served with crispy Paneer 65 and a refreshing Sweet Lassi for a complete meal made for one.",
        price: 369,
        image: "/Bowl/Chicken 65.png",
        isVeg: false,
        isBestseller: true,
        serves: "Serves 1",
        portion: "4 boneless chicken + 4 Paneer 65 + Sweet Lassi",
      },
      {
        name: "Couple's Matka Meal",
        description:
          "[Serves 1-2] Our Classic Chicken Matka with three succulent chicken pieces and a whole boiled egg, served with two chilled Cokes and two Gulab Jamuns for the perfect meal to share.",
        price: 499,
        image: "/couples-matka-meal.png",
        isVeg: false,
        isBestseller: true,
        serves: "Serves 1-2",
        portion: "3 bone-in chicken + egg + 2 Coke + 2 Jamun",
      },
      {
        name: "Late Night Cravings",
        description:
          "[Serves 1] Your favourite Chicken Biryani Bowl served with crispy Chicken 65 and a chilled Thums Up for a hearty late-night meal.",
        price: 399,
        image: "/Bowl/Chicken 65.png",
        isVeg: false,
        isBestseller: true,
        serves: "Serves 1",
        portion: "4 boneless chicken + 4 Chicken 65 + Thums Up",
      },
    ],
  },
  {
    name: "🍛 Biryani Bowls",
    items: [
      {
        name: "Classic Veg Biryani",
        description:
          "[Serves 1] A wholesome dum biryani made with farm-fresh seasonal vegetables, fragrant long-grain basmati and aromatic whole spices, slow-cooked for balanced flavour in every bite. Served with complimentary Boondi Raita.",
        price: 219,
        image: "/Matka/Veg.jpg",
        isVeg: true,
        serves: "Serves 1",
      },
      {
        name: "Classic Egg Biryani",
        description:
          "[Serves 1] Two whole boiled eggs coated in our signature spiced masala, layered with fragrant long-grain basmati and slow-cooked on dum for a comforting, flavourful meal. Served with complimentary Boondi Raita.",
        price: 209,
        image: "/Bowl/Egg.jpg",
        isVeg: false,
        isEgg: true,
        serves: "Serves 1",
      },
      {
        name: "Classic Paneer Biryani",
        description:
          "[Serves 1] Soft cubes of fresh paneer marinated in a rich yoghurt and aromatic spice blend, layered with fragrant long-grain basmati and slow-cooked on dum for a hearty vegetarian favourite. Served with complimentary Boondi Raita.",
        price: 219,
        image: "/Matka/Paneer.jpg",
        isVeg: true,
        serves: "Serves 1",
      },
      {
        name: "Paneer 65 Biryani",
        description:
          "[Serves 1] Crispy Paneer 65 layered with fragrant long-grain basmati and aromatic spices, slow-cooked on dum for a bold South Indian-inspired twist on classic biryani. Served with complimentary Boondi Raita.",
        price: 249,
        image: "/Bowl/Paneer 65.png",
        isVeg: true,
        serves: "Serves 1",
      },
      {
        name: "Kolkata Chicken Biryani",
        description:
          "[Serves 1] Authentic Kolkata-style biryani with boneless chicken pieces, a signature potato, a whole boiled egg and fragrant long-grain basmati delicately flavoured with aromatic spices. Mild, balanced and traditionally prepared. Served with complimentary Boondi Raita.",
        price: 249,
        image: "/Bowl/Kolkata Chicken.jpg",
        isVeg: false,
        serves: "Serves 1",
      },
      {
        name: "Hyderabadi Chicken Biryani",
        description:
          "[Serves 1] Succulent chicken marinated in authentic Hyderabadi spices, layered with fragrant long-grain basmati and slow-cooked on dum for rich, bold flavour in every bite. Served with complimentary Boondi Raita.",
        price: 249,
        image: "/Bowl/Chicken.jpg",
        isVeg: false,
        serves: "Serves 1",
      },
      {
        name: "Hyderabadi Chicken Biryani (Extra Spicy)",
        description:
          "[Serves 1] Succulent chicken marinated in authentic Hyderabadi spices, layered with fragrant long-grain basmati and slow-cooked on dum for rich, bold flavour in every bite. Served with complimentary Boondi Raita.",
        price: 279,
        image: "/Bowl/Chicken.jpg",
        isVeg: false,
        serves: "Serves 1",
        variant: "Extra Spicy",
      },
      {
        name: "Classic Chicken Biryani",
        description:
          "[Serves 1] Tender boneless chicken marinated in aromatic spices, layered with fragrant long-grain basmati and slow-cooked on dum for rich, balanced flavour. A timeless favourite served with complimentary Boondi Raita.",
        price: 249,
        image: "/Bowl/Chicken.jpg",
        isVeg: false,
        isBestseller: true,
        serves: "Serves 1",
      },
      {
        name: "Lucknowi Chicken Biryani",
        description:
          "[Serves 1] Authentic Awadhi-style biryani with tender boneless chicken, fragrant long-grain basmati and delicately balanced whole spices, slow-cooked on dum for a refined, aromatic finish. Served with complimentary Boondi Raita.",
        price: 249,
        image: "/Bowl/Lucknowi.jpg",
        isVeg: false,
        serves: "Serves 1",
      },
      {
        name: "Signature Chicken Biryani",
        description:
          "[Serves 1] Our premium loaded biryani featuring extra boneless chicken, a whole boiled egg and fragrant long-grain basmati, slow-cooked on dum with aromatic spices for a richer, more satisfying meal. Served with complimentary Boondi Raita.",
        price: 299,
        image: "/Bowl/Chicken.jpg",
        isVeg: false,
        isBestseller: true,
        serves: "Serves 1",
      },
      {
        name: "Chicken 65 Biryani",
        description:
          "[Serves 1] Crispy Chicken 65 layered with fragrant long-grain basmati and aromatic spices, slow-cooked on dum for a bold South Indian-inspired biryani with a spicy kick. Served with complimentary Boondi Raita.",
        price: 299,
        image: "/Bowl/Chicken 65.png",
        isVeg: false,
        isBestseller: true,
        serves: "Serves 1",
      },
      {
        name: "Signature Mutton Biryani",
        description:
          "[Serves 1] Premium dum biryani with two tender mutton pieces, fragrant long-grain basmati and aromatic whole spices, slow-cooked for deep, rich flavour. Served with complimentary Boondi Raita.",
        price: 499,
        image: "/mutton-biryani.png",
        isVeg: false,
        serves: "Serves 1",
      },
    ],
  },
  {
    name: "👑 Royal Matka Biryani",
    items: [
      {
        name: "Classic Chicken Matka Biryani",
        description:
          "[Serves 1-2] Three succulent chicken pieces, a whole boiled egg and fragrant long-grain basmati, sealed in a traditional clay matka with whole-wheat dough and slow-cooked on dum for exceptional flavour. Served with complimentary Salan and Boondi Raita.",
        price: 379,
        image: "/Matka/Chicken.jpg",
        isVeg: false,
        isBestseller: true,
        serves: "Serves 1-2",
      },
      {
        name: "Hyderabadi Chicken Matka Biryani",
        description:
          "[Serves 1-2] Authentic Hyderabadi-style biryani with three succulent chicken pieces, a whole boiled egg, fragrant basmati and bold aromatic spices, sealed in a clay matka and slow-cooked on dum. Served with complimentary Salan and Boondi Raita.",
        price: 379,
        image: "/Matka/Hyderabadi.jpg",
        isVeg: false,
        serves: "Serves 1-2",
      },
      {
        name: "Kolkata Chicken Matka Biryani",
        description:
          "[Serves 1-2] Authentic Kolkata-style biryani with two tender chicken pieces, a signature potato, two whole boiled eggs and fragrant long-grain basmati, sealed in a clay matka and slow-cooked on dum. Served with complimentary Salan and Boondi Raita.",
        price: 379,
        image: "/Matka/Kolkata.jpg",
        isVeg: false,
        serves: "Serves 1-2",
      },
      {
        name: "Lucknowi Chicken Matka Biryani",
        description:
          "[Serves 1-2] Authentic Lucknowi-style biryani with three tender chicken pieces, a whole boiled egg, fragrant long-grain basmati and delicate Awadhi spices, sealed in a clay matka and slow-cooked on dum. Served with complimentary Salan and Boondi Raita.",
        price: 379,
        image: "/Matka/Lucknowi.jpg",
        isVeg: false,
        serves: "Serves 1-2",
      },
      {
        name: "Classic Egg Matka Biryani",
        description:
          "[Serves 1-2] Three whole boiled eggs layered with fragrant long-grain basmati and our signature spice blend, sealed in a traditional clay matka with whole-wheat dough and slow-cooked on dum. Served with complimentary Salan and Boondi Raita.",
        price: 319,
        image: "/Matka/Egg.jpg",
        isVeg: false,
        isEgg: true,
        serves: "Serves 1-2",
      },
      {
        name: "Classic Paneer Matka Biryani",
        description:
          "[Serves 1-2] Fresh paneer cubes marinated in a rich yoghurt and aromatic spice blend, layered with fragrant long-grain basmati, sealed in a traditional clay matka with whole-wheat dough and slow-cooked on dum. Served with complimentary Salan and Boondi Raita.",
        price: 319,
        image: "/Matka/Paneer.jpg",
        isVeg: true,
        serves: "Serves 1-2",
      },
      {
        name: "Classic Veg Matka Biryani",
        description:
          "[Serves 1-2] Farm-fresh seasonal vegetables layered with fragrant long-grain basmati and aromatic whole spices, sealed in a traditional clay matka with whole-wheat dough and slow-cooked on dum. Served with complimentary Salan and Boondi Raita.",
        price: 299,
        image: "/Matka/Veg.jpg",
        isVeg: true,
        serves: "Serves 1-2",
      },
      {
        name: "Signature Mutton Matka Biryani",
        description:
          "[Serves 1-2] Three premium mutton pieces layered with fragrant long-grain basmati and aromatic whole spices, sealed in a traditional clay matka with whole-wheat dough and slow-cooked on dum for rich, deep flavour. Served with complimentary Salan and Boondi Raita.",
        price: 599,
        image: "/mutton-biryani.png",
        isVeg: false,
        serves: "Serves 1-2",
      },
      {
        name: "Kolkata Mutton Matka Biryani",
        description:
          "[Serves 1-2] Authentic Kolkata-style biryani with tender mutton, a signature whole potato and fragrant long-grain basmati, sealed in a traditional clay matka with whole-wheat dough and slow-cooked on dum. Served with complimentary Salan and Boondi Raita.",
        price: 599,
        image: "/mutton-biryani.png",
        isVeg: false,
        serves: "Serves 1-2",
      },
    ],
  },
  {
    name: "👨‍👩‍👧‍👦 Family Packs",
    items: [
      {
        name: "Kolkata Chicken Biryani Family Pack",
        description:
          "[Serves 2-3] Authentic Kolkata-style biryani with six tender chicken pieces, two signature potatoes, two whole boiled eggs and fragrant long-grain basmati delicately flavoured with aromatic spices. Perfect for sharing. Served with complimentary Boondi Raita.",
        price: 649,
        image: "/Bowl/Kolkata Chicken.jpg",
        isVeg: false,
        serves: "Serves 2-3",
      },
      {
        name: "Hyderabadi Chicken Biryani Family Pack",
        description:
          "[Serves 2-3] Authentic Hyderabadi-style biryani with six succulent chicken pieces, fragrant long-grain basmati and bold aromatic spices, slow-cooked on dum for rich, robust flavour. Served with complimentary Boondi Raita.",
        price: 649,
        image: "/Matka/Hyderabadi.jpg",
        isVeg: false,
        serves: "Serves 2-3",
      },
      {
        name: "Classic Chicken Biryani Family Pack",
        description:
          "[Serves 2-3] Our classic chicken biryani prepared with six tender chicken pieces, fragrant long-grain basmati and aromatic whole spices, slow-cooked on dum for a hearty meal made to share. Served with complimentary Boondi Raita.",
        price: 649,
        image: "/Matka/Chicken.jpg",
        isVeg: false,
        serves: "Serves 2-3",
      },
      {
        name: "Lucknowi Chicken Biryani Family Pack",
        description:
          "[Serves 2-3] Authentic Lucknowi-style biryani with six tender chicken pieces, fragrant long-grain basmati and delicate Awadhi spices, slow-cooked on dum for a refined, aromatic flavour. Served with complimentary Boondi Raita.",
        price: 649,
        image: "/Matka/Lucknowi.jpg",
        isVeg: false,
        serves: "Serves 2-3",
      },
    ],
  },
  {
    name: "🍗 Starters & Gravies",
    items: [
      {
        name: "Chicken 65 (Boneless)",
        description:
          "Crispy boneless chicken tossed with curry leaves, green chillies and our signature South Indian spice blend. The perfect starter or side to pair with your favourite biryani.",
        price: 249,
        image: "/Bowl/Chicken 65.png",
        isVeg: false,
        serves: "Serves 1",
      },
      {
        name: "Paneer 65",
        description:
          "Crispy paneer tossed with curry leaves, green chillies and our signature South Indian spice blend. A bold vegetarian starter that pairs perfectly with any biryani.",
        price: 229,
        image: "/Bowl/Paneer 65.png",
        isVeg: true,
        serves: "Serves 1",
      },
      {
        name: "Butter Chicken (1/2 Kg)",
        description:
          "[Serves 2] Tender boneless chicken simmered in a rich tomato, butter and cream gravy, finished with aromatic spices for a smooth, indulgent makhani. Best enjoyed with steamed basmati rice or tandoori paratha.",
        price: 329,
        image: "/Butter Chicken.jpg",
        isVeg: false,
        serves: "Serves 2",
      },
    ],
  },
  {
    name: "🥤 Sides & Beverages",
    items: [
      {
        name: "Sweet Lassi (250ml)",
        description:
          "Thick, creamy sweet lassi made with fresh curd and served chilled. The perfect way to balance the rich flavours of biryani.",
        price: 59,
        image: "/sweet-lassi.png",
        isVeg: true,
      },
      {
        name: "Masala Lemonade",
        description:
          "Fresh lemonade blended with mint, jaljeera and aromatic spices, served chilled for a refreshing finish to your meal.",
        price: 89,
        image: "/sweet-lassi.png",
        isVeg: true,
      },
      {
        name: "Steamed Basmati Rice (250g)",
        description:
          "Long-grain basmati, perfectly steamed. The best companion for our Butter Chicken or any gravy.",
        price: 99,
        image: "/Steamed Rice.jpeg",
        isVeg: true,
        serves: "Serves 1",
      },
      {
        name: "Dum Biryani Rice (500g)",
        description:
          "Fragrant long-grain basmati slow-cooked with aromatic whole spices in our signature biryani masala. Perfect as a side or to pair with your favourite curry.",
        price: 189,
        image: "/Biryani Rice.jpeg",
        isVeg: true,
        serves: "Serves 1-2",
      },
    ],
  },
];

