export interface GalleryImage {
  src: string;
  alt: string;
  span?: "tall" | "wide";
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/Matka/Hyderabadi.jpg",
    alt: "Authentic Hyderabadi Matka Dum Biryani slow cooked in traditional clay pot",
    span: "tall",
  },
  {
    src: "/Matka/Chicken.jpg",
    alt: "Classic Chicken Matka Biryani sealed with whole wheat dough",
  },
  {
    src: "/Matka/Kolkata.jpg",
    alt: "Authentic Kolkata style Matka Biryani with signature potato and boiled egg",
  },
  {
    src: "/Bowl/Chicken 65.png",
    alt: "Crispy South Indian Chicken 65 Dum Biryani",
    span: "wide",
  },
  {
    src: "/Butter Chicken.jpg",
    alt: "Rich and creamy Mughlai Butter Chicken Makhani",
  },
  {
    src: "/Matka/Lucknowi.jpg",
    alt: "Aromatic Awadhi Lucknowi Dum Biryani",
  },
];

