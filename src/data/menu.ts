import bossBurger from '../assets/menu/boss-burger.png'
import crispyChickenFries from '../assets/menu/crispy-chicken-fries.png'
import dairyFreeIcon from '../assets/menu/allergens/dairy-free.png'
import domoDreamCup from '../assets/menu/domo-dream-cup.png'
import domoLavaBites from '../assets/menu/domo-lava-bites.png'
import domoMoco from '../assets/menu/domo-moco.png'
import domoYaki from '../assets/menu/domo-yaki.png'
import drinks from '../assets/menu/drinks.png'
import glutenFreeIcon from '../assets/menu/allergens/gluten-free.png'
import katsuCurry from '../assets/menu/katsu-curry.png'
import kimchiKatsu from '../assets/menu/kimchi-katsu.png'
import streetDog from '../assets/menu/street-dog.png'
import umamiPasta from '../assets/menu/umami-pasta.png'
import vegetarianIcon from '../assets/menu/allergens/vegetarian.png'

export type MenuAllergen = 'vegetarian' | 'gluten-free' | 'dairy-free'

export const MENU_ALLERGEN_ICONS: Record<
  MenuAllergen,
  { label: string; icon: string }
> = {
  vegetarian: { label: 'Vegetarian Safe', icon: vegetarianIcon },
  'gluten-free': { label: 'Gluten-Free Safe', icon: glutenFreeIcon },
  'dairy-free': { label: 'Dairy-Free Safe', icon: dairyFreeIcon },
}

export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  badge?: string
  featured?: boolean
  image?: string
  allergens?: MenuAllergen[]
}

export type MenuCategory = {
  id: string
  emoji: string
  title: string
  items: MenuItem[]
}

export const FEATURED_MENU_ITEMS: MenuItem[] = [
  {
    id: 'domo-moco',
    name: 'Domo Moco',
    description: 'Rice, hamburger patty, fried egg & signature Domo gravy.',
    price: '$19',
    featured: true,
    image: domoMoco,
  },
  {
    id: 'golden-katsu-curry',
    name: 'Golden Katsu Curry',
    description: 'Crispy tonkatsu, golden Japanese curry, steamed rice.',
    price: '$18',
    featured: true,
    image: katsuCurry,
  },
  {
    id: 'umami-cream-pasta',
    name: 'Umami Cream Pasta',
    description: 'Rich umami cream sauce, house pasta.',
    price: '$18.50',
    badge: 'Domo Pick',
    featured: true,
    image: umamiPasta,
  },
  {
    id: 'crispy-chicken-loaded-fries',
    name: 'Crispy Chicken Loaded Fries',
    description: 'Korean fried chicken, waffle fries, house sauce.',
    price: '$17',
    featured: true,
    image: crispyChickenFries,
  },
  {
    id: 'domo-boss-burger',
    name: 'Domo Boss Burger',
    description: 'Double smash patty, special sauce, brioche bun.',
    price: '$17',
    featured: true,
    image: bossBurger,
  },
  {
    id: 'kimchi-katsu-sandwich',
    name: 'Kimchi Katsu Sandwich',
    description: 'Crispy katsu, house kimchi, milk bread.',
    price: '$18.50',
    featured: true,
    image: kimchiKatsu,
  },
  {
    id: 'domos-street-dog',
    name: "Domo's Street Dog",
    description: 'All-beef dog, bonito flakes, waffle fries.',
    price: '$16.50',
    featured: true,
    image: streetDog,
  },
  {
    id: 'refreshers-drinks',
    name: 'Refreshers & Drinks',
    description: 'Matcha, Mango Lemonade, Iced Cookie Coffee, Milo Dinosaur & more.',
    price: 'from $6.50',
    featured: true,
    image: drinks,
  },
]

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'plates',
    emoji: '🍱',
    title: 'Plates',
    items: [
      {
        id: 'domo-moco',
        name: 'Domo Moco',
        description:
          "A Hawaiian-Japanese twist: housemade loco moco with Domo's signature demi-glace.",
        price: '$19',
        image: domoMoco,
        allergens: ['dairy-free'],
      },
      {
        id: 'golden-katsu-curry',
        name: 'Golden Katsu Curry',
        description: 'Crispy katsu over steamed rice, Japanese curry, pickled daikon.',
        price: '$18',
        image: katsuCurry,
      },
      {
        id: 'umami-cream-pasta',
        name: 'Umami Cream Pasta',
        description: 'Creamy mushroom pasta, umami-forward, house-made noodles.',
        price: '$18.50',
        badge: '⭐ Domo Pick',
        image: umamiPasta,
        allergens: ['vegetarian'],
      },
      {
        id: 'crispy-chicken-loaded-fries',
        name: 'Crispy Chicken Loaded Fries',
        description: 'Korean-style fried chicken, waffle fries, signature sauce.',
        price: '$17',
        image: crispyChickenFries,
      },
    ],
  },
  {
    id: 'handhelds',
    emoji: '🥪',
    title: 'Handhelds',
    items: [
      {
        id: 'domo-boss-burger',
        name: 'Domo Boss Burger',
        description: 'Double smash patty, American cheese, Domo sauce, brioche bun.',
        price: '$17',
        image: bossBurger,
      },
      {
        id: 'kimchi-katsu-sandwich',
        name: 'Kimchi Katsu Sandwich',
        description: 'Pork katsu, kimchi slaw, gochujang mayo, milk bread.',
        price: '$18.50',
        image: kimchiKatsu,
      },
      {
        id: 'domos-street-dog',
        name: "Domo's Street Dog",
        description: "Beef sausage, bonito flakes, waffle fries, Domo's signature toppings.",
        price: '$16.50',
        image: streetDog,
        allergens: ['dairy-free'],
      },
    ],
  },
  {
    id: 'kids',
    emoji: '🧸',
    title: 'Domo Jr (Kids)',
    items: [
      {
        id: 'chicken-nuggets',
        name: 'Chicken Nuggets',
        description: 'Crispy nuggets with waffle fries and fresh fruit.',
        price: '$9',
        image: crispyChickenFries,
      },
      {
        id: 'junior-cheeseburger',
        name: 'Junior Cheeseburger',
        description: 'Kid-sized cheeseburger with waffle fries and fresh fruit.',
        price: '$9',
        image: bossBurger,
      },
      {
        id: 'domos-hot-dog',
        name: "Domo's Hot Dog",
        description: 'Toasted hot dog bun, beef sausage, waffle fries, fresh fruit, ketchup.',
        price: '$9',
        image: streetDog,
      },
    ],
  },
  {
    id: 'drinks',
    emoji: '🍵',
    title: 'Drinks',
    items: [
      {
        id: 'refreshers',
        name: 'Refreshers',
        description:
          'Specialty seasonal refreshers. Strawberry lime or watermelon pineapple.',
        price: '$8',
        image: drinks,
        allergens: ['vegetarian', 'gluten-free', 'dairy-free'],
      },
      {
        id: 'strawberry-matcha',
        name: 'Strawberry Matcha',
        description: 'Matcha with strawberry. Oatmilk alternative available.',
        price: '$8.50',
        image: drinks,
        allergens: ['vegetarian', 'gluten-free', 'dairy-free'],
      },
      {
        id: 'cinnamon-roll-matcha',
        name: 'Cinnamon Roll Matcha',
        description: 'Matcha with cinnamon roll flavor. Hot or iced.',
        price: '$8.50',
        image: drinks,
        allergens: ['vegetarian', 'gluten-free'],
      },
      {
        id: 'mango-lemonade',
        name: 'Mango Lemonade',
        description: 'Bright, juicy, and refreshing.',
        price: '$7',
        image: drinks,
        allergens: ['vegetarian', 'gluten-free', 'dairy-free'],
      },
      {
        id: 'iced-cookie-coffee',
        name: 'Iced Cookie Coffee',
        description: 'Sweet cookie notes over iced coffee.',
        price: '$7',
        image: drinks,
      },
      {
        id: 'milo-dinosaur',
        name: 'Milo Dinosaur',
        description: 'Classic Milo with a generous Milo topping.',
        price: '$7',
        image: drinks,
        allergens: ['vegetarian'],
      },
      {
        id: 'arnold-palmer',
        name: 'Arnold Palmer',
        description: 'Iced tea and lemonade, perfectly balanced.',
        price: '$6.50',
        image: drinks,
        allergens: ['vegetarian', 'gluten-free', 'dairy-free'],
      },
      {
        id: 'lemonade',
        name: 'Lemonade',
        description: 'Fresh and classic.',
        price: '$6',
        image: drinks,
        allergens: ['vegetarian', 'gluten-free', 'dairy-free'],
      },
    ],
  },
  {
    id: 'desserts',
    emoji: '🍡',
    title: 'Desserts',
    items: [
      {
        id: 'domo-dream-cup',
        name: 'Domo Dream Cup',
        description:
          "Domo's signature dessert cup: flan, strawberry, and your choice of strawberry or cookie creme top.",
        price: '$9',
        image: domoDreamCup,
        allergens: ['vegetarian'],
      },
      {
        id: 'domo-yaki',
        name: 'Domo-Yaki',
        description: 'Japanese-style treat, chocolate or ham&cheese.',
        price: '$6',
        image: domoYaki,
        allergens: ['vegetarian'],
      },
      {
        id: 'domos-lava-bites',
        name: "Domo's Lava Bites",
        description: 'Warm, gooey, irresistible. Choclate, maple, or you choose.',
        price: '$6',
        image: domoLavaBites,
        allergens: ['vegetarian'],
      },
    ],
  },
]
