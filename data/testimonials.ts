export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Parent of Grade VIII Student",
    content:
      "DWPS Greater Noida has been an exceptional school for my child. The faculty is highly dedicated and the infrastructure is world-class. My daughter has grown tremendously in academics and extracurricular activities since joining.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Parent of Grade X Student",
    content:
      "The teachers at DWPS are truly committed to the all-round development of students. The school's focus on both academics and character building is commendable. My son's confidence has increased manifold.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anita Gupta",
    role: "Parent of Grade V Student",
    content:
      "We are very happy with the overall environment at DWPS. The school maintains excellent standards and the communication between parents and teachers is very transparent. Highly recommend this school.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sanjay Kapoor",
    role: "Parent of Grade XII Student",
    content:
      "My daughter secured 95% in board exams thanks to the rigorous preparation and personalized attention from DWPS faculty. The school's career guidance program is also excellent.",
    rating: 5,
  },
  {
    id: 5,
    name: "Meera Nair",
    role: "Parent of Grade III Student",
    content:
      "The holistic approach at DWPS is what attracted us initially. Three years in, we couldn't be happier. My son loves going to school every day, which speaks volumes about the environment created here.",
    rating: 5,
  },
];
