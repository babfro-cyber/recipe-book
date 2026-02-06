const recipes = [
  {
    id: "gratin-dauphinois",
    name: "Gratin Dauphinois",
    name_fr: "Gratin Dauphinois",
    time: "85 min",
    servings: 4,
    tags: ["oven", "batch", "vegetarian"],
    ingredients: [
      { item: "butter", qty: 70, unit: "g" },
      { item: "potatoes", qty: 1, unit: "kg" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "thickened cream", qty: 200, unit: "ml" },
      { item: "milk", qty: 670, unit: "ml" },
      { item: "nutmeg", qty: 0.5, unit: "tsp" },
      { item: "salt", qty: 1, unit: "tsp" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Peel and thinly slice potatoes. Do not rinse after slicing. (10 min)",
      "Finely mince the garlic. (5 min)",
      "Bring milk, garlic, salt, pepper, and nutmeg to a gentle boil. Add potatoes and simmer until just tender. (15 min)",
      "Preheat oven to 180C and butter a baking dish. (5 min)",
      "Drain potatoes into dish, pour over cream, and dot with butter. (5 min)",
      "Bake until golden and bubbling. (45 min)",
    ],
    steps_fr: [
      "Eplucher et couper les pommes de terre en fines rondelles. Ne pas rincer apres la coupe. (10 min)",
      "Hacher finement l'ail. (5 min)",
      "Porter le lait a frémissement avec l'ail, le sel, le poivre et la muscade. Ajouter les pommes de terre et laisser juste attendrir. (15 min)",
      "Prechauffer le four a 180C et beurrer un plat. (5 min)",
      "Egoutter les pommes de terre dans le plat, verser la creme et parsemer de noisettes de beurre. (5 min)",
      "Cuire jusqu'a ce que ce soit dore et bouillonnant. (45 min)",
    ],
  },
  {
    id: "poulet-basquaise",
    name: "Poulet Basquaise (Thermomix)",
    name_fr: "Poulet Basquaise (Thermomix)",
    time: "45 min",
    servings: 4,
    tags: ["thermomix", "batch"],
    ingredients: [
      { item: "chicken thighs", qty: 4, unit: "pcs" },
      { item: "red capsicum", qty: 2, unit: "pcs" },
      { item: "tomatoes", qty: 2, unit: "pcs" },
      { item: "brown onion", qty: 1, unit: "pcs" },
      { item: "garlic clove", qty: 1, unit: "pcs" },
      { item: "olive oil", qty: 1, unit: "tbsp" },
      { item: "paprika", qty: 1, unit: "tsp" },
      { item: "mixed herbs", qty: 1, unit: "tbsp" },
      { item: "bay leaf", qty: 1, unit: "pcs" },
      { item: "salt", qty: 0.5, unit: "tsp" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Chop onion and garlic in Thermomix. (2 min)",
      "Saute with olive oil. (3 min)",
      "Add sliced capsicum; cook on reverse. (5 min)",
      "Add tomatoes, paprika, herbs, bay leaf; simmer. (10 min)",
      "Add chicken thighs, season, and cook on reverse/spoon. (25 min)",
    ],
    steps_fr: [
      "Hacher l'oignon et l'ail au Thermomix. (2 min)",
      "Faire revenir avec l'huile d'olive. (3 min)",
      "Ajouter les poivrons et cuire en sens inverse. (5 min)",
      "Ajouter tomates, paprika, herbes et laurier; mijoter. (10 min)",
      "Ajouter le poulet, assaisonner et cuire en sens inverse/vitesse cuillere. (25 min)",
    ],
  },
  {
    id: "chicken-broccolini-mustard",
    name: "Chicken & Broccolini in Creamy Mustard Sauce",
    name_fr: "Poulet et broccolini sauce moutarde",
    time: "30 min",
    servings: 4,
    tags: ["pan", "oven"],
    ingredients: [
      { item: "chicken tenderloins", qty: 700, unit: "g" },
      { item: "plain flour", qty: 30, unit: "g" },
      { item: "olive oil", qty: 2.5, unit: "tbsp" },
      { item: "broccolini", qty: 1, unit: "kg" },
      { item: "shallot", qty: 1, unit: "pcs" },
      { item: "chicken stock", qty: 500, unit: "ml" },
      { item: "fresh thyme", qty: 4, unit: "sprigs" },
      { item: "thickened cream", qty: 125, unit: "ml" },
      { item: "dijon mustard", qty: 2, unit: "tbsp" },
      { item: "salt", qty: 0.5, unit: "tsp" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Season chicken and lightly coat in flour. (5 min)",
      "Sear chicken in oil until golden; keep warm. (8 min)",
      "Blanch broccolini, then saute briefly. (5 min)",
      "Cook shallot, add stock and thyme, simmer. (5 min)",
      "Stir in cream and mustard, simmer to thicken, return chicken and broccolini. (7 min)",
    ],
    steps_fr: [
      "Assaisonner le poulet et le fariner legerement. (5 min)",
      "Saisir le poulet dans l'huile jusqu'a coloration; reserver au chaud. (8 min)",
      "Blanchir le broccolini puis le faire sauter rapidement. (5 min)",
      "Cuire l'echalote, ajouter le bouillon et le thym, laisser frémir. (5 min)",
      "Ajouter creme et moutarde, faire epaissir, remettre poulet et broccolini. (7 min)",
    ],
  },
  {
    id: "curry-epinards-pois-chiche",
    name: "Spinach & Chickpea Coconut Curry",
    name_fr: "Curry d'epinards et pois chiches au lait de coco",
    time: "20 min",
    servings: 4,
    tags: ["pan", "vegetarian", "batch"],
    ingredients: [
      { item: "fresh spinach", qty: 250, unit: "g" },
      { item: "tomato puree", qty: 350, unit: "g" },
      { item: "canned chickpeas", qty: 350, unit: "g" },
      { item: "coconut milk", qty: 200, unit: "ml" },
      { item: "brown onion", qty: 1, unit: "pcs" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "curry powder", qty: 2, unit: "tsp" },
      { item: "turmeric", qty: 1, unit: "tsp" },
      { item: "olive oil", qty: 1, unit: "tbsp" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Slice onion and garlic; wash spinach. (5 min)",
      "Heat oil, toast spices, then add onion and garlic. (5 min)",
      "Add tomato puree, coconut milk, and chickpeas; simmer. (5 min)",
      "Stir in spinach and cook until wilted. (5 min)",
    ],
    steps_fr: [
      "Emincer oignon et ail; laver les epinards. (5 min)",
      "Chauffer l'huile, torréfier les epices puis ajouter oignon et ail. (5 min)",
      "Ajouter puree de tomate, lait de coco et pois chiches; mijoter. (5 min)",
      "Ajouter les epinards et cuire jusqu'a ce qu'ils tombent. (5 min)",
    ],
  },
  {
    id: "poulet-ananas-couscous",
    name: "Chicken with Pineapple & Couscous",
    name_fr: "Poulet a l'ananas et couscous",
    time: "35 min",
    servings: 4,
    tags: ["pan", "batch"],
    ingredients: [
      { item: "chicken breast", qty: 700, unit: "g" },
      { item: "pineapple", qty: 600, unit: "g" },
      { item: "thickened cream", qty: 3, unit: "tbsp" },
      { item: "couscous", qty: 320, unit: "g" },
      { item: "olive oil", qty: 1, unit: "tbsp" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Peel and dice pineapple. (5 min)",
      "Saute pineapple in olive oil. (5 min)",
      "Dice chicken and add to the pan; cook until golden. (10 min)",
      "Prepare couscous with hot water (1.5 water to 1 couscous). (10 min)",
      "Stir in cream, combine with couscous, and warm through. (5 min)",
    ],
    steps_fr: [
      "Eplucher et couper l'ananas en des. (5 min)",
      "Faire revenir l'ananas avec l'huile d'olive. (5 min)",
      "Couper le poulet en des, l'ajouter et cuire jusqu'a coloration. (10 min)",
      "Preparer le couscous avec eau chaude (1,5 d'eau pour 1 de couscous). (10 min)",
      "Incorporer la creme, melanger avec le couscous et rechauffer. (5 min)",
    ],
  },
  {
    id: "tabbouleh",
    name: "Tabbouleh",
    name_fr: "Taboule",
    time: "30 min",
    servings: 4,
    tags: ["no-cook", "salad", "vegetarian", "batch"],
    ingredients: [
      { item: "pearl couscous", qty: 400, unit: "g" },
      { item: "tomatoes", qty: 600, unit: "g" },
      { item: "red onion", qty: 300, unit: "g" },
      { item: "capsicum", qty: 1, unit: "pcs" },
      { item: "cucumber", qty: 1, unit: "pcs" },
      { item: "lemon juice", qty: 2, unit: "pcs" },
      { item: "olive oil", qty: 5, unit: "tbsp" },
      { item: "mint", qty: 1, unit: "bunch" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Cook couscous in water (1.5 water to 1 couscous). (10 min)",
      "Wash and chop vegetables finely. (10 min)",
      "Toss with lemon juice and olive oil. (5 min)",
      "Add chopped mint and pepper, mix well. (5 min)",
    ],
    steps_fr: [
      "Cuire le couscous dans l'eau (1,5 d'eau pour 1 de couscous). (10 min)",
      "Laver et couper finement les legumes. (10 min)",
      "Assaisonner avec le jus de citron et l'huile d'olive. (5 min)",
      "Ajouter la menthe hachee et le poivre, bien melanger. (5 min)",
    ],
  },
  {
    id: "quinoa-butternut-cranberries",
    name: "Quinoa Salad with Honey-Roasted Pumpkin & Cranberries",
    name_fr: "Salade de quinoa au butternut roti, chevre et cranberries",
    time: "35 min",
    servings: 4,
    tags: ["oven", "salad", "vegetarian", "batch"],
    ingredients: [
      { item: "quinoa", qty: 170, unit: "g" },
      { item: "butternut pumpkin", qty: 1, unit: "kg" },
      { item: "dried cranberries", qty: 60, unit: "g" },
      { item: "goat cheese", qty: 120, unit: "g" },
      { item: "pepitas", qty: 60, unit: "g" },
      { item: "honey", qty: 1, unit: "tbsp" },
      { item: "olive oil", qty: 1.5, unit: "tbsp" },
      { item: "turmeric", qty: 0.5, unit: "tsp" },
      { item: "salt", qty: 0.5, unit: "tsp" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Peel and cube pumpkin. (5 min)",
      "Toss with oil, honey, turmeric, salt, and pepper; roast at 200C. (20 min)",
      "Cook quinoa and drain. (10 min)",
      "Assemble with cranberries, goat cheese, and pepitas. (5 min)",
    ],
    steps_fr: [
      "Eplucher et couper le butternut en cubes. (5 min)",
      "Melanger avec huile, miel, curcuma, sel et poivre; rôtir a 200C. (20 min)",
      "Cuire le quinoa puis egoutter. (10 min)",
      "Assembler avec cranberries, chevre et pepitas. (5 min)",
    ],
  },
  {
    id: "fajitas",
    name: "Chicken Fajitas",
    name_fr: "Fajitas au poulet",
    time: "35 min",
    servings: 4,
    tags: ["pan", "batch"],
    ingredients: [
      { item: "capsicum", qty: 4, unit: "pcs" },
      { item: "brown onion", qty: 3, unit: "pcs" },
      { item: "chicken breast", qty: 600, unit: "g" },
      { item: "tomato pulp", qty: 400, unit: "g" },
      { item: "cumin", qty: 3, unit: "tsp" },
      { item: "paprika", qty: 1, unit: "tsp" },
      { item: "quinoa", qty: 40, unit: "g" },
      { item: "olive oil", qty: 1, unit: "tbsp" },
    ],
    steps: [
      "Slice capsicum and onion. (5 min)",
      "Saute veg in olive oil. (10 min)",
      "Slice chicken; add to pan and cook. (10 min)",
      "Stir in spices and tomato pulp; simmer. (7 min)",
      "Serve with cooked quinoa. (3 min)",
    ],
    steps_fr: [
      "Couper poivrons et oignons en lamelles. (5 min)",
      "Faire revenir les legumes a l'huile d'olive. (10 min)",
      "Couper le poulet et l'ajouter; cuire. (10 min)",
      "Ajouter epices et pulpe de tomate; laisser mijoter. (7 min)",
      "Servir avec le quinoa cuit. (3 min)",
    ],
  },
  {
    id: "roasted-veg-cannellini",
    name: "Rustic Roasted Vegetable Bake with Cannellini Beans",
    name_fr: "Legumes rotis aux haricots cannellini",
    time: "45 min",
    servings: 4,
    tags: ["oven", "vegetarian", "batch"],
    ingredients: [
      { item: "butternut pumpkin", qty: 600, unit: "g" },
      { item: "red capsicum", qty: 2, unit: "pcs" },
      { item: "zucchini", qty: 2, unit: "pcs" },
      { item: "red onion", qty: 2, unit: "pcs" },
      { item: "garlic cloves", qty: 4, unit: "pcs" },
      { item: "cannellini beans", qty: 2, unit: "cans" },
      { item: "olive oil", qty: 2, unit: "tbsp" },
      { item: "dried rosemary", qty: 1, unit: "tsp" },
      { item: "dried thyme", qty: 1, unit: "tsp" },
      { item: "parmesan", qty: 100, unit: "g" },
      { item: "salt", qty: 0.5, unit: "tsp" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Preheat oven to 200C and toss veg with oil, herbs, salt, and pepper. (10 min)",
      "Roast 30 minutes, stirring halfway. (30 min)",
      "Add cannellini beans and roast 10 minutes. (8 min)",
      "Sprinkle parmesan and grill until golden. (3 min)",
    ],
    steps_fr: [
      "Prechauffer le four a 200C et melanger les legumes avec huile, herbes, sel et poivre. (10 min)",
      "Rôtir 30 min en remuant a mi-cuisson. (30 min)",
      "Ajouter les haricots cannellini et rôtir encore. (8 min)",
      "Parsemer de parmesan et gratiner. (3 min)",
    ],
  },
  {
    id: "pea-mint-soup",
    name: "Pea & Mint Soup (Thermomix)",
    name_fr: "Soupe de petits pois a la menthe (Thermomix)",
    time: "20 min",
    servings: 4,
    tags: ["thermomix", "vegetarian", "batch"],
    ingredients: [
      { item: "brown onion", qty: 2, unit: "pcs" },
      { item: "olive oil", qty: 40, unit: "g" },
      { item: "water", qty: 1.4, unit: "L" },
      { item: "vegetable stock", qty: 2, unit: "tbsp" },
      { item: "frozen peas", qty: 1, unit: "kg" },
      { item: "mint", qty: 2, unit: "bunches" },
      { item: "cream", qty: 2, unit: "tbsp" },
    ],
    steps: [
      "Chop onion with oil in Thermomix. (2 min)",
      "Add water, stock, peas; cook at 100C. (15 min)",
      "Add mint and cook briefly. (2 min)",
      "Add cream and blend to smooth. (1 min)",
    ],
    steps_fr: [
      "Hacher l'oignon avec l'huile au Thermomix. (2 min)",
      "Ajouter eau, bouillon et petits pois; cuire a 100C. (15 min)",
      "Ajouter la menthe et cuire. (2 min)",
      "Ajouter la creme et mixer. (1 min)",
    ],
  },
  {
    id: "curry-poisson",
    name: "Coconut Fish Curry",
    name_fr: "Curry de poisson au lait de coco",
    time: "30 min",
    servings: 4,
    tags: ["pan", "seafood", "batch"],
    ingredients: [
      { item: "white fish fillets", qty: 4, unit: "pcs" },
      { item: "coconut milk", qty: 400, unit: "ml" },
      { item: "red onion", qty: 1, unit: "pcs" },
      { item: "tomato", qty: 1, unit: "pcs" },
      { item: "carrot", qty: 3, unit: "pcs" },
      { item: "capsicum", qty: 1, unit: "pcs" },
      { item: "curry powder", qty: 1, unit: "tbsp" },
      { item: "turmeric", qty: 1, unit: "tbsp" },
      { item: "ground ginger", qty: 1, unit: "tsp" },
      { item: "chilli flakes", qty: 0.5, unit: "tsp" },
      { item: "lime", qty: 1, unit: "pcs" },
      { item: "olive oil", qty: 2, unit: "tbsp" },
    ],
    steps: [
      "Saute onion in oil. (5 min)",
      "Add spices and stir. (2 min)",
      "Add carrots, capsicum, tomato; cook. (5 min)",
      "Pour in coconut milk and simmer. (8 min)",
      "Add fish, cover, and cook until flaky. (8 min)",
      "Finish with lime juice. (2 min)",
    ],
    steps_fr: [
      "Faire revenir l'oignon dans l'huile. (5 min)",
      "Ajouter les epices et remuer. (2 min)",
      "Ajouter carottes, poivron et tomate; cuire. (5 min)",
      "Verser le lait de coco et laisser mijoter. (8 min)",
      "Ajouter le poisson, couvrir et cuire jusqu'a ce qu'il s'effeuille. (8 min)",
      "Terminer avec le jus de citron vert. (2 min)",
    ],
  },
  {
    id: "lentil-soup-thermomix",
    name: "Lentil Soup (Thermomix)",
    name_fr: "Soupe de lentilles (Thermomix)",
    time: "40 min",
    servings: 4,
    tags: ["thermomix", "vegetarian", "batch"],
    ingredients: [
      { item: "brown onion", qty: 1, unit: "pcs" },
      { item: "carrot", qty: 1, unit: "pcs" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "olive oil", qty: 10, unit: "g" },
      { item: "green lentils", qty: 200, unit: "g" },
      { item: "vegetable stock", qty: 1, unit: "tsp" },
      { item: "water", qty: 900, unit: "g" },
      { item: "cream", qty: 1, unit: "tsp" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Add onion, carrot, garlic; chop. (2 min)",
      "Saute with olive oil. (5 min)",
      "Add lentils, stock, and water; cook. (30 min)",
      "Add cream and blend to desired texture. (3 min)",
    ],
    steps_fr: [
      "Ajouter oignon, carotte et ail; hacher. (2 min)",
      "Faire revenir avec l'huile d'olive. (5 min)",
      "Ajouter lentilles, bouillon et eau; cuire. (30 min)",
      "Ajouter la creme et mixer a la texture voulue. (3 min)",
    ],
  },
  {
    id: "lentils-brussels-skillet",
    name: "Lentils & Brussels Sprouts Skillet",
    name_fr: "Poelee de lentilles et choux de Bruxelles",
    time: "40 min",
    servings: 4,
    tags: ["pan", "vegetarian", "batch"],
    ingredients: [
      { item: "green lentils", qty: 200, unit: "g" },
      { item: "brussels sprouts", qty: 1, unit: "kg" },
      { item: "olive oil", qty: 2, unit: "tbsp" },
      { item: "brown onion", qty: 1, unit: "pcs" },
      { item: "garlic cloves", qty: 3, unit: "pcs" },
      { item: "chilli flakes", qty: 1, unit: "tsp" },
      { item: "lemon", qty: 0.5, unit: "pcs" },
      { item: "salt", qty: 0.5, unit: "tsp" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Cook lentils until tender; drain. (20 min)",
      "Trim and halve Brussels sprouts. (5 min)",
      "Saute onion and garlic in oil. (5 min)",
      "Add sprouts and cook until browned. (10 min)",
      "Stir in lentils, chilli, lemon, salt, and pepper. (5 min)",
    ],
    steps_fr: [
      "Cuire les lentilles jusqu'a tendres; egoutter. (20 min)",
      "Parer et couper les choux de Bruxelles en deux. (5 min)",
      "Faire revenir l'oignon et l'ail dans l'huile. (5 min)",
      "Ajouter les choux et cuire jusqu'a coloration. (10 min)",
      "Ajouter lentilles, piment, citron, sel et poivre. (5 min)",
    ],
  },
  {
    id: "harira-lentil-chickpea",
    name: "Moroccan Lentil & Chickpea Soup (Harira)",
    name_fr: "Soupe marocaine lentilles et pois chiches (Harira)",
    time: "45 min",
    servings: 4,
    tags: ["pan", "vegetarian", "batch"],
    ingredients: [
      { item: "green lentils", qty: 133, unit: "g" },
      { item: "canned chickpeas", qty: 0.67, unit: "can" },
      { item: "brown onion", qty: 1.33, unit: "pcs" },
      { item: "carrot", qty: 1.33, unit: "pcs" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "diced tomatoes", qty: 1.33, unit: "cans" },
      { item: "vegetable stock", qty: 0.33, unit: "L" },
      { item: "olive oil", qty: 1.33, unit: "tbsp" },
      { item: "cumin", qty: 1.33, unit: "tsp" },
      { item: "ground coriander", qty: 0.67, unit: "tsp" },
      { item: "paprika", qty: 0.67, unit: "tsp" },
      { item: "turmeric", qty: 0.67, unit: "tsp" },
      { item: "lemon", qty: 0.67, unit: "pcs" },
    ],
    steps: [
      "Saute onion, carrot, and garlic in oil. (5 min)",
      "Add spices and toast briefly. (2 min)",
      "Add tomatoes, stock, and lentils; simmer. (25 min)",
      "Add chickpeas and cook 10 minutes. (10 min)",
      "Finish with lemon juice and seasoning. (3 min)",
    ],
    steps_fr: [
      "Faire revenir oignon, carotte et ail dans l'huile. (5 min)",
      "Ajouter les epices et torréfier. (2 min)",
      "Ajouter tomates, bouillon et lentilles; mijoter. (25 min)",
      "Ajouter les pois chiches et cuire encore. (10 min)",
      "Finir avec jus de citron et assaisonnement. (3 min)",
    ],
  },
  {
    id: "legumes-farcis",
    name: "Stuffed Vegetables",
    name_fr: "Legumes farcis",
    time: "45 min",
    servings: 4,
    tags: ["oven", "batch"],
    ingredients: [
      { item: "tomatoes", qty: 4, unit: "pcs" },
      { item: "round zucchini", qty: 4, unit: "pcs" },
      { item: "capsicum", qty: 4, unit: "pcs" },
      { item: "white onion", qty: 1, unit: "pcs" },
      { item: "egg", qty: 1, unit: "pcs" },
      { item: "ground beef", qty: 250, unit: "g" },
      { item: "ground pork", qty: 250, unit: "g" },
      { item: "milk", qty: 250, unit: "ml" },
      { item: "breadcrumbs", qty: 40, unit: "g" },
      { item: "mixed herbs", qty: 1, unit: "tbsp" },
      { item: "garlic cloves", qty: 4, unit: "pcs" },
      { item: "olive oil", qty: 1, unit: "tbsp" },
      { item: "salt", qty: 0.5, unit: "tsp" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Preheat oven to 180C. (5 min)",
      "Cut tops and scoop vegetables. (10 min)",
      "Mix filling ingredients thoroughly. (10 min)",
      "Stuff vegetables and place in baking dish. (5 min)",
      "Drizzle with olive oil and bake. (40 min)",
    ],
    steps_fr: [
      "Prechauffer le four a 180C. (5 min)",
      "Couper les chapeaux et vider les legumes. (10 min)",
      "Melanger tous les ingredients de la farce. (10 min)",
      "Farcir les legumes et disposer dans un plat. (5 min)",
      "Arroser d'huile d'olive et cuire au four. (40 min)",
    ],
  },
  {
    id: "chilli-con-carne-thermomix",
    name: "Chilli Con Carne (Thermomix)",
    name_fr: "Chili con carne (Thermomix)",
    time: "35 min",
    servings: 4,
    tags: ["thermomix", "batch"],
    ingredients: [
      { item: "red onion", qty: 1, unit: "pcs" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "olive oil", qty: 15, unit: "g" },
      { item: "beef mince", qty: 500, unit: "g" },
      { item: "chilli powder", qty: 0.125, unit: "tsp" },
      { item: "cumin", qty: 2, unit: "tsp" },
      { item: "oregano", qty: 0.5, unit: "tsp" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
      { item: "tomato pulp", qty: 5, unit: "tbsp" },
      { item: "capsicum", qty: 1, unit: "pcs" },
      { item: "red kidney beans", qty: 1, unit: "can" },
      { item: "black beans", qty: 1, unit: "can" },
    ],
    steps: [
      "Chop onion and garlic in Thermomix. (2 min)",
      "Saute with olive oil. (3 min)",
      "Add mince and cook on spoon/reverse. (3 min)",
      "Add spices, tomato pulp, and capsicum. (10 min)",
      "Add beans and cook on spoon/reverse. (10 min)",
      "Season to taste. (5 min)",
    ],
    steps_fr: [
      "Hacher l'oignon et l'ail au Thermomix. (2 min)",
      "Faire revenir avec l'huile. (3 min)",
      "Ajouter le boeuf hache et cuire en sens inverse. (3 min)",
      "Ajouter epices, pulpe de tomate et poivron. (10 min)",
      "Ajouter les haricots et cuire. (10 min)",
      "Assaisonner et servir. (5 min)",
    ],
  },
  {
    id: "ratatouille-thermomix",
    name: "Ratatouille",
    name_fr: "Ratatouille (Thermomix)",
    time: "50 min",
    servings: 4,
    tags: ["thermomix", "vegetarian", "batch"],
    ingredients: [
      { item: "white onion", qty: 2, unit: "pcs" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "olive oil", qty: 33, unit: "g" },
      { item: "tomatoes", qty: 2, unit: "pcs" },
      { item: "capsicum", qty: 2, unit: "pcs" },
      { item: "mixed herbs", qty: 1, unit: "tbsp" },
      { item: "eggplant", qty: 1, unit: "pcs" },
      { item: "zucchini", qty: 2, unit: "pcs" },
    ],
    steps: [
      "Chop onion and garlic in Thermomix. (2 min)",
      "Saute with olive oil. (5 min)",
      "Add vegetables and herbs; cook until tender. (35 min)",
      "Season and portion. (8 min)",
    ],
    steps_fr: [
      "Hacher l'oignon et l'ail au Thermomix. (2 min)",
      "Faire revenir avec l'huile. (5 min)",
      "Ajouter les legumes et herbes; cuire jusqu'a tendres. (35 min)",
      "Assaisonner et repartir. (8 min)",
    ],
  },
  {
    id: "split-pea-soup-thermomix",
    name: "Split Pea Soup (Thermomix)",
    name_fr: "Soupe de pois casses (Thermomix)",
    time: "50 min",
    servings: 4,
    tags: ["thermomix", "batch"],
    ingredients: [
      { item: "brown onion", qty: 1, unit: "pcs" },
      { item: "carrot", qty: 1, unit: "pcs" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "olive oil", qty: 10, unit: "g" },
      { item: "split peas", qty: 200, unit: "g" },
      { item: "vegetable stock", qty: 1, unit: "tsp" },
      { item: "water", qty: 900, unit: "g" },
      { item: "cream", qty: 1, unit: "tsp" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Add onion, carrot, garlic; chop. (2 min)",
      "Saute with olive oil. (5 min)",
      "Add split peas, stock, and water; cook. (40 min)",
      "Add cream and blend to desired texture. (3 min)",
    ],
    steps_fr: [
      "Ajouter oignon, carotte, ail; hacher. (2 min)",
      "Faire revenir avec l'huile. (5 min)",
      "Ajouter pois casses, bouillon et eau; cuire. (40 min)",
      "Ajouter la creme et mixer. (3 min)",
    ],
  },
  {
    id: "poulet-courgettes-creme",
    name: "Chicken & Zucchini in Cream",
    name_fr: "Poulet aux courgettes et creme",
    time: "30 min",
    servings: 4,
    tags: ["pan", "batch"],
    ingredients: [
      { item: "chicken breast", qty: 700, unit: "g" },
      { item: "zucchini", qty: 10, unit: "pcs" },
      { item: "brown onion", qty: 2, unit: "pcs" },
      { item: "thickened cream", qty: 2, unit: "tbsp" },
      { item: "olive oil", qty: 1, unit: "tbsp" },
      { item: "rice", qty: 40, unit: "g" },
    ],
    steps: [
      "Wash and slice zucchinis. (5 min)",
      "Slice onions and saute in olive oil. (5 min)",
      "Add zucchini and cook until tender. (10 min)",
      "Slice chicken and pan-fry in a separate pan. (7 min)",
      "Combine chicken and vegetables, stir in cream, warm through. (3 min)",
    ],
    steps_fr: [
      "Laver et couper les courgettes. (5 min)",
      "Emincer les oignons et les faire revenir. (5 min)",
      "Ajouter les courgettes et cuire jusqu'a fondantes. (10 min)",
      "Couper le poulet et le saisir dans une autre poele. (7 min)",
      "Assembler, ajouter la creme et rechauffer. (3 min)",
    ],
  },
  {
    id: "vegan-bean-stew-fennel",
    name: "Vegan Bean Stew with Fennel",
    name_fr: "Ragout vegan de haricots au fenouil",
    time: "75 min",
    servings: 4,
    tags: ["pan", "batch", "vegetarian"],
    ingredients: [
      { item: "brown onion", qty: 1, unit: "pcs" },
      { item: "garlic cloves", qty: 4, unit: "pcs" },
      { item: "red capsicum", qty: 2, unit: "pcs" },
      { item: "fennel bulb", qty: 1.5, unit: "pcs" },
      { item: "cumin", qty: 1.5, unit: "tsp" },
      { item: "smoked paprika", qty: 3, unit: "tsp" },
      { item: "fennel seeds", qty: 0.5, unit: "tsp" },
      { item: "chilli flakes", qty: 0.25, unit: "tsp" },
      { item: "olive oil", qty: 2, unit: "tbsp" },
      { item: "canned tomatoes", qty: 2, unit: "cans" },
      { item: "cannellini beans", qty: 2, unit: "cans" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Optional: roast fennel and extra capsicum at 200C. (25 min)",
      "Cook onion in olive oil until soft. (7 min)",
      "Add garlic; cook a few minutes. (5 min)",
      "Add capsicum and fennel; cook. (5 min)",
      "Add spices, tomatoes, and beans; simmer until thick. (25 min)",
      "Adjust seasoning and finish. (8 min)",
    ],
    steps_fr: [
      "Optionnel: rôtir fenouil et poivron a 200C. (25 min)",
      "Faire revenir l'oignon dans l'huile. (7 min)",
      "Ajouter l'ail et cuire encore. (5 min)",
      "Ajouter poivron et fenouil; cuire. (5 min)",
      "Ajouter epices, tomates et haricots; mijoter. (25 min)",
      "Ajuster l'assaisonnement. (8 min)",
    ],
  },
  {
    id: "dahl-lentilles-epinards",
    name: "Lentil Dahl with Spinach",
    name_fr: "Dahl de lentilles aux epinards",
    time: "40 min",
    servings: 4,
    tags: ["pan", "vegetarian", "batch"],
    ingredients: [
      { item: "green lentils", qty: 200, unit: "g" },
      { item: "coconut milk", qty: 320, unit: "ml" },
      { item: "hot water", qty: 400, unit: "ml" },
      { item: "fresh spinach", qty: 100, unit: "g" },
      { item: "carrot", qty: 1, unit: "pcs" },
      { item: "red onion", qty: 1, unit: "pcs" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "turmeric", qty: 12, unit: "g" },
      { item: "curry powder", qty: 1, unit: "tbsp" },
      { item: "lime", qty: 1, unit: "pcs" },
      { item: "olive oil", qty: 1, unit: "tbsp" },
    ],
    steps: [
      "Soak lentils, then drain. (15 min)",
      "Saute onion, garlic, and carrot in oil. (5 min)",
      "Add lentils, coconut milk, hot water, turmeric, and curry; simmer. (20 min)",
      "Add spinach in the last 5 minutes. (5 min)",
    ],
    steps_fr: [
      "Faire tremper les lentilles puis egoutter. (15 min)",
      "Faire revenir oignon, ail et carotte dans l'huile. (5 min)",
      "Ajouter lentilles, lait de coco, eau chaude, curcuma et curry; mijoter. (20 min)",
      "Ajouter les epinards en fin de cuisson. (5 min)",
    ],
  },
  {
    id: "tian-de-legumes",
    name: "Vegetable Tian",
    name_fr: "Tian de legumes",
    time: "60 min",
    servings: 4,
    tags: ["oven", "vegetarian", "batch"],
    ingredients: [
      { item: "potatoes", qty: 2, unit: "pcs" },
      { item: "tomatoes", qty: 3, unit: "pcs" },
      { item: "eggplant", qty: 1, unit: "pcs" },
      { item: "dried thyme", qty: 1, unit: "tbsp" },
      { item: "zucchini", qty: 4, unit: "pcs" },
      { item: "olive oil", qty: 4, unit: "tbsp" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Preheat oven to 180C. (5 min)",
      "Slice all vegetables thinly. (10 min)",
      "Layer in a dish, season with thyme, pepper, and oil. (10 min)",
      "Bake until tender. (45 min)",
    ],
    steps_fr: [
      "Prechauffer le four a 180C. (5 min)",
      "Trancher finement tous les legumes. (10 min)",
      "Superposer dans un plat, assaisonner de thym, poivre et huile. (10 min)",
      "Cuire au four jusqu'a tendres. (45 min)",
    ],
  },
  {
    id: "bolognese-thermomix",
    name: "Bolognese",
    name_fr: "Bolognaise (Thermomix)",
    time: "67 min",
    servings: 4,
    tags: ["thermomix", "batch"],
    ingredients: [
      { item: "carrot", qty: 120, unit: "g" },
      { item: "onion", qty: 160, unit: "g" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "olive oil", qty: 3, unit: "tbsp" },
      { item: "beef mince", qty: 500, unit: "g" },
      { item: "herbes de provence", qty: 1, unit: "tsp" },
      { item: "tomato pulp", qty: 400, unit: "g" },
      { item: "tomato paste", qty: 30, unit: "g" },
    ],
    steps: [
      "Chop carrot, onion, and garlic. (2 min)",
      "Saute with olive oil. (5 min)",
      "Add mince and cook. (15 min)",
      "Add tomato pulp, paste, and herbs; simmer. (40 min)",
      "Season and serve. (5 min)",
    ],
    steps_fr: [
      "Hacher carotte, oignon et ail. (2 min)",
      "Faire revenir avec l'huile d'olive. (5 min)",
      "Ajouter le boeuf hache et cuire. (15 min)",
      "Ajouter pulpe de tomate, concentre et herbes; mijoter. (40 min)",
      "Assaisonner et servir. (5 min)",
    ],
  },
  {
    id: "gratin-choufleur",
    name: "Cauliflower Almond Gratin",
    name_fr: "Gratin de chou-fleur aux amandes",
    time: "25 min",
    servings: 4,
    tags: ["oven", "vegetarian", "batch"],
    ingredients: [
      { item: "cauliflower", qty: 1, unit: "head" },
      { item: "almonds", qty: 80, unit: "g" },
      { item: "grated cheese", qty: 60, unit: "g" },
      { item: "dried thyme", qty: 4, unit: "tbsp" },
      { item: "olive oil", qty: 4, unit: "tbsp" },
      { item: "cumin", qty: 1, unit: "tsp" },
      { item: "creamy plant base", qty: 150, unit: "ml" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Preheat oven to 180C and blanch cauliflower florets. (10 min)",
      "Crush almonds. (3 min)",
      "Layer cauliflower in a dish; add almonds, cheese, thyme, oil, cream, cumin. (5 min)",
      "Bake until golden. (15 min)",
    ],
    steps_fr: [
      "Prechauffer le four a 180C et blanchir le chou-fleur. (10 min)",
      "Concasser les amandes. (3 min)",
      "Disposer le chou-fleur dans un plat; ajouter amandes, fromage, thym, huile, creme et cumin. (5 min)",
      "Gratiner jusqu'a dore. (15 min)",
    ],
  },
  {
    id: "moussaka",
    name: "Moussaka",
    name_fr: "Moussaka",
    time: "60 min",
    servings: 4,
    tags: ["oven", "batch"],
    ingredients: [
      { item: "ground beef", qty: 375, unit: "g" },
      { item: "eggplants", qty: 5, unit: "pcs" },
      { item: "crushed tomatoes", qty: 2, unit: "cans" },
      { item: "brown onion", qty: 1, unit: "pcs" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "olive oil", qty: 2, unit: "tbsp" },
      { item: "cinnamon", qty: 1, unit: "tsp" },
      { item: "cumin", qty: 1, unit: "tsp" },
      { item: "water", qty: 375, unit: "ml" },
      { item: "butter", qty: 60, unit: "g" },
      { item: "plain flour", qty: 3, unit: "tbsp" },
      { item: "milk", qty: 600, unit: "ml" },
      { item: "nutmeg", qty: 0.25, unit: "tsp" },
      { item: "salt", qty: 0.5, unit: "tsp" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Preheat oven to 180C and slice eggplant. (5 min)",
      "Saute onion and garlic, add beef and spices, then tomatoes and water; simmer. (15 min)",
      "Grill eggplant slices until tender. (15 min)",
      "Make bechamel: melt butter, whisk in flour, add milk, season. (10 min)",
      "Layer eggplant, meat sauce, bechamel; bake. (30 min)",
    ],
    steps_fr: [
      "Prechauffer le four a 180C et trancher les aubergines. (5 min)",
      "Faire revenir oignon et ail, ajouter boeuf et epices, puis tomates et eau; mijoter. (15 min)",
      "Griller les aubergines jusqu'a tendres. (15 min)",
      "Preparer la bechamel: beurre, farine, lait, muscade. (10 min)",
      "Monter les couches et enfourner. (30 min)",
    ],
  },
  {
    id: "chickpeas-swiss-chard",
    name: "Chickpeas & Swiss Chard",
    name_fr: "Pois chiches et blettes",
    time: "25 min",
    servings: 4,
    tags: ["pan", "vegetarian", "batch"],
    ingredients: [
      { item: "canned chickpeas", qty: 2, unit: "cans" },
      { item: "swiss chard", qty: 1, unit: "bunch" },
      { item: "brown onion", qty: 1, unit: "pcs" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "lemon", qty: 1, unit: "pcs" },
      { item: "olive oil", qty: 1, unit: "tbsp" },
    ],
    steps: [
      "Saute onion and garlic in olive oil. (8 min)",
      "Add chickpeas and chopped chard. (8 min)",
      "Cook until wilted; finish with lemon. (8 min)",
    ],
    steps_fr: [
      "Faire revenir oignon et ail dans l'huile. (8 min)",
      "Ajouter pois chiches et blettes. (8 min)",
      "Cuire jusqu'a ce que les blettes tombent; finir au citron. (8 min)",
    ],
  },
  {
    id: "lasagne-lentilles",
    name: "Lentil & Vegetable Lasagne",
    name_fr: "Lasagnes lentilles et legumes",
    time: "60 min",
    servings: 4,
    tags: ["oven", "vegetarian", "batch"],
    ingredients: [
      { item: "yellow onion", qty: 1, unit: "pcs" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "carrot", qty: 2, unit: "pcs" },
      { item: "zucchini", qty: 2, unit: "pcs" },
      { item: "red capsicum", qty: 1, unit: "pcs" },
      { item: "green lentils", qty: 150, unit: "g" },
      { item: "crushed tomatoes", qty: 400, unit: "g" },
      { item: "tomato paste", qty: 2, unit: "tbsp" },
      { item: "thyme", qty: 1, unit: "tsp" },
      { item: "oregano", qty: 1, unit: "tsp" },
      { item: "sweet paprika", qty: 1, unit: "tsp" },
      { item: "butter", qty: 30, unit: "g" },
      { item: "plain flour", qty: 30, unit: "g" },
      { item: "milk", qty: 400, unit: "ml" },
      { item: "nutmeg", qty: 0.25, unit: "tsp" },
      { item: "lasagne sheets", qty: 1, unit: "pack" },
    ],
    steps: [
      "Chop onion, garlic, carrot; dice zucchini and capsicum. (10 min)",
      "Saute aromatics, add veg, then lentils, tomatoes, paste, herbs, and water; simmer. (25 min)",
      "Make bechamel: melt butter, whisk in flour, add milk, season with nutmeg. (10 min)",
      "Layer sauce, sheets, and bechamel; bake at 180C. (30 min)",
      "Rest before serving. (5 min)",
    ],
    steps_fr: [
      "Hacher oignon, ail, carotte; couper courgette et poivron. (10 min)",
      "Faire revenir, ajouter legumes, puis lentilles, tomates, concentre, herbes et eau; mijoter. (25 min)",
      "Faire une bechamel: beurre, farine, lait, muscade. (10 min)",
      "Monter lasagnes et cuire a 180C. (30 min)",
      "Laisser reposer. (5 min)",
    ],
  },
  {
    id: "spinach-ricotta-lasagne",
    name: "Spinach & Ricotta Lasagne",
    name_fr: "Lasagnes aux epinards et ricotta",
    time: "60 min",
    servings: 4,
    tags: ["oven", "vegetarian", "batch"],
    ingredients: [
      { item: "spinach", qty: 500, unit: "g" },
      { item: "ricotta", qty: 300, unit: "g" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "egg", qty: 1, unit: "pcs" },
      { item: "parmesan", qty: 100, unit: "g" },
      { item: "lasagne sheets", qty: 375, unit: "g" },
      { item: "butter", qty: 50, unit: "g" },
      { item: "plain flour", qty: 2, unit: "tbsp" },
      { item: "milk", qty: 400, unit: "ml" },
      { item: "olive oil", qty: 1, unit: "tbsp" },
      { item: "shallot", qty: 1, unit: "pcs" },
      { item: "diced tomatoes", qty: 400, unit: "g" },
      { item: "dried oregano", qty: 0.5, unit: "tsp" },
      { item: "dried basil", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Mix spinach, ricotta, garlic, egg, and half the parmesan. (10 min)",
      "Make bechamel with butter, flour, and milk. (10 min)",
      "Make quick tomato sauce with oil, shallot, and tomatoes. (8 min)",
      "Assemble and bake at 200C until golden. (25 min)",
      "Rest before serving. (5 min)",
    ],
    steps_fr: [
      "Melanger epinards, ricotta, ail, oeuf et la moitie du parmesan. (10 min)",
      "Faire la bechamel avec beurre, farine et lait. (10 min)",
      "Faire une sauce tomate rapide avec huile, echalote et tomates. (8 min)",
      "Monter et cuire a 200C jusqu'a dore. (25 min)",
      "Laisser reposer. (5 min)",
    ],
  },
  {
    id: "quiche-courgettes-poivrons-onions",
    name: "Zucchini, Capsicum & Onion Quiche",
    name_fr: "Quiche courgettes, poivrons et oignons",
    time: "55 min",
    servings: 4,
    tags: ["oven", "batch", "vegetarian", "thermomix"],
    ingredients: [
      { item: "plain flour", qty: 225, unit: "g" },
      { item: "butter", qty: 90, unit: "g" },
      { item: "water", qty: 75, unit: "g" },
      { item: "gruyere", qty: 40, unit: "g" },
      { item: "goat cheese", qty: 200, unit: "g" },
      { item: "capsicum", qty: 4, unit: "pcs" },
      { item: "zucchini", qty: 4, unit: "pcs" },
      { item: "brown onion", qty: 2, unit: "pcs" },
      { item: "eggs", qty: 6, unit: "pcs" },
      { item: "thickened cream", qty: 300, unit: "ml" },
      { item: "black pepper", qty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Make pastry in Thermomix and chill. (10 min)",
      "Preheat oven to 220C. (5 min)",
      "Saute vegetables until soft. (10 min)",
      "Whisk eggs with cream and cheese; season. (5 min)",
      "Assemble quiche and bake. (30 min)",
    ],
    steps_fr: [
      "Faire la pate au Thermomix et reserver au frais. (10 min)",
      "Prechauffer le four a 220C. (5 min)",
      "Faire revenir les legumes. (10 min)",
      "Battre les oeufs avec creme et fromages; poivrer. (5 min)",
      "Assembler et cuire la quiche. (30 min)",
    ],
  },
  {
    id: "eggplant-parmigiana",
    name: "Eggplant Parmigiana",
    name_fr: "Parmigiana d'aubergines",
    time: "60 min",
    servings: 4,
    tags: ["oven", "vegetarian", "batch"],
    ingredients: [
      { item: "eggplant", qty: 2, unit: "pcs" },
      { item: "parmesan", qty: 100, unit: "g" },
      { item: "basil", qty: 1, unit: "bunch" },
      { item: "mozzarella", qty: 150, unit: "g" },
      { item: "brown onion", qty: 1, unit: "pcs" },
      { item: "garlic cloves", qty: 3, unit: "pcs" },
      { item: "diced tomatoes", qty: 600, unit: "g" },
      { item: "olive oil", qty: 2, unit: "tbsp" },
    ],
    steps: [
      "Slice and bake eggplant until tender. (20 min)",
      "Saute onion and garlic; add tomatoes and simmer. (15 min)",
      "Layer sauce, eggplant, mozzarella, parmesan, and basil. (10 min)",
      "Bake until bubbling and golden. (15 min)",
    ],
    steps_fr: [
      "Couper les aubergines et les cuire au four. (20 min)",
      "Faire revenir oignon et ail; ajouter tomates et mijoter. (15 min)",
      "Alterner sauce, aubergines, mozzarella, parmesan et basilic. (10 min)",
      "Cuire jusqu'a ce que ce soit gratine. (15 min)",
    ],
  },
];



function safeGetItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // Ignore storage errors for file://
  }
}

function safeParseStorage(key, fallback) {
  try {
    const raw = safeGetItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

const storedPicksByWeek = safeParseStorage("pantryPicksByWeek", {});
const storedChecksByWeek = safeParseStorage("pantryChecksByWeek", {});
const storedServingsByWeek = safeParseStorage("pantryServingsByWeek", {});
let selectedRecipesByWeek = { ...storedPicksByWeek };
let checkedItemsByWeek = { ...storedChecksByWeek };
let selectedServingsByWeek = { ...storedServingsByWeek };
let selectedRecipes = [];
let checkedItems = {};
let currentWeekKey = "";
let cookWeekKey = "";
let currentLanguage = safeGetItem("pantryLanguage") || "en";
let selectedServings = {};
let currentCookRecipeId = "";
let lastAddedRecipeId = "";

const pickList = document.getElementById("pick-list");
const recipeGrid = document.getElementById("recipe-grid");
const shoppingList = document.getElementById("shopping-list");
const cookSelect = document.getElementById("cook-select");
const cookCard = document.getElementById("cook-card");
const miniGrid = document.getElementById("mini-grid");
const weekLabel = document.getElementById("week-label");
const recentWeeks = document.getElementById("recent-weeks");
const cookWeekLabel = document.getElementById("cook-week-label");
const topWeekPicker = document.getElementById("top-week-picker");
const topWeekLabel = document.getElementById("top-week-label");
const heroCount = document.getElementById("hero-count");
const recipeSearch = document.getElementById("recipe-search");
const filterUtensil = document.getElementById("filter-utensil");
const filterProtein = document.getElementById("filter-protein");
const filterMeal = document.getElementById("filter-meal");
const languageSelect = document.getElementById("language-select");

const translations = {
  en: {
    hero_title: "Weekly recipe planner",
    hero_subhead: "Choose recipes, build the shopping list, and cook.",
    plan_week: "Plan the week",
    start_cooking: "Start cooking",
    selected_recipes: "Selected recipes",
    summary_title: "Plan summary",
    summary_week: "Planning",
    summary_recipes: "Recipes selected",
    summary_missing: "Missing items",
    language: "Language",
    recipe_picker: "Recipe Picker",
    recipe_picker_sub: "Select 3-6 recipes for the week. No day-by-day planning required.",
    week_starting: "Week starting",
    cook_week: "Week to cook",
    top_week: "Week",
    selected_count: (count) => `${count} recipe${count === 1 ? "" : "s"} selected`,
    cook_sync_week: "Sync to plan week",
    week_select: "Select week",
    week_clear: "Clear",
    week_this: "This week",
    filter_all: "All",
    search_placeholder: "Search recipes",
    meal_main: "Main",
    meal_soup: "Soup",
    meal_salad: "Salad",
    meal_bake: "Bake",
    time_total: "Total",
    time_cook: "Cook",
    recipe_library: "Recipe Library",
    recipe_library_sub:
      "Tap a recipe to add it to your picks. Scroll inside the list to keep the rest of the page visible.",
    shopping_list: "Auto Shopping List",
    shopping_list_sub: "Aggregated ingredients from your planned recipes. Check items as you shop.",
    shopping_checked: "Already have",
    last_selected: (weeks) =>
      weeks === 0 ? "Last selected this week" : `Last selected ${weeks} week${weeks === 1 ? "" : "s"} ago`,
    never_selected: "Never selected",
    order_woolworths: "Order on Woolworths",
    clear_checks: "Clear checks",
    clear_plan: "Clear plan",
    cook_mode: "Cook Mode",
    cook_mode_sub: "Select a planned recipe to follow the steps.",
    load_instructions: "Load instructions",
    ready_title: "Ready when you are",
    ready_sub: "Pick a recipe from your plan to start cooking.",
    tip_text: "Tip: You can edit servings in cook mode and the ingredient list will update.",
    servings_label: "servings",
    pick_summary_empty: "Pick 3-6 recipes for the week to get started.",
    pick_summary: (count) => `You have ${count} recipe${count === 1 ? "" : "s"} selected.`,
    remove: "Remove",
    add_to_picks: "Add to picks",
    remove_from_picks: "Remove from picks",
    shopping_empty: "Add recipes to see your list.",
    cook_placeholder: "Pick recipes to cook",
    cook_select: "Select a recipe",
    cook_empty_title: "Pick a planned recipe first",
    cook_empty_sub: "Once you select a recipe, we will show the steps here.",
    recent_weeks: "Recent weeks",
    view: "View",
    utensil_thermomix: "Thermomix",
    utensil_oven: "Oven",
    utensil_airfryer: "Airfryer",
    utensil_pan: "Fry pan",
    utensil_nocook: "No-cook",
    utensil_multi: "Multi",
    protein_chicken: "Chicken",
    protein_beef: "Beef",
    protein_pork: "Pork",
    protein_fish: "Fish",
    protein_seafood: "Seafood",
    protein_vegetarian: "Vegetarian",
  },
  fr: {
    hero_title: "Planificateur de recettes",
    hero_subhead: "Choisissez vos recettes, la liste de courses et cuisinez.",
    plan_week: "Planifier la semaine",
    start_cooking: "Commencer à cuisiner",
    selected_recipes: "Recettes sélectionnées",
    summary_title: "Résumé du planning",
    summary_week: "Semaine",
    summary_recipes: "Recettes",
    summary_missing: "Articles manquants",
    language: "Langue",
    recipe_picker: "Sélection de recettes",
    recipe_picker_sub: "Choisissez 3 à 6 recettes pour la semaine, sans planning par jour.",
    week_starting: "Semaine du",
    cook_week: "Semaine a cuisiner",
    top_week: "Semaine",
    selected_count: (count) => `${count} recette${count === 1 ? "" : "s"} sélectionnée${count === 1 ? "" : "s"}`,
    cook_sync_week: "Synchroniser avec la semaine planifiee",
    week_select: "Choisir la semaine",
    week_clear: "Effacer",
    week_this: "Cette semaine",
    filter_all: "Tous",
    search_placeholder: "Rechercher une recette",
    meal_main: "Plat",
    meal_soup: "Soupe",
    meal_salad: "Salade",
    meal_bake: "Gratin",
    time_total: "Total",
    time_cook: "Cuisson",
    recipe_library: "Bibliothèque de recettes",
    recipe_library_sub:
      "Touchez une recette pour l'ajouter. Faites défiler la liste pour garder le reste visible.",
    shopping_list: "Liste de courses",
    shopping_list_sub: "Ingrédients regroupés de vos recettes. Cochez au fur et à mesure.",
    shopping_checked: "Deja dans le placard",
    last_selected: (weeks) =>
      weeks === 0 ? "Selectionnee cette semaine" : `Selectionnee il y a ${weeks} semaine${weeks === 1 ? "" : "s"}`,
    never_selected: "Jamais selectionnee",
    order_woolworths: "Commander sur Woolworths",
    clear_checks: "Effacer les coches",
    clear_plan: "Vider la sélection",
    cook_mode: "Mode cuisine",
    cook_mode_sub: "Sélectionnez une recette pour suivre les étapes.",
    load_instructions: "Charger les instructions",
    ready_title: "Prêt quand vous l'êtes",
    ready_sub: "Choisissez une recette pour commencer.",
    tip_text: "Astuce : vous pouvez ajuster les portions en mode cuisine et la liste s'actualise.",
    servings_label: "portions",
    pick_summary_empty: "Choisissez 3 à 6 recettes pour démarrer.",
    pick_summary: (count) => `Vous avez ${count} recette${count === 1 ? "" : "s"} sélectionnée${count === 1 ? "" : "s"}.`,
    remove: "Retirer",
    add_to_picks: "Ajouter",
    remove_from_picks: "Retirer",
    shopping_empty: "Ajoutez des recettes pour voir la liste.",
    cook_placeholder: "Choisissez des recettes",
    cook_select: "Sélectionnez une recette",
    cook_empty_title: "Choisissez d'abord une recette",
    cook_empty_sub: "Après sélection, les étapes s'afficheront ici.",
    recent_weeks: "Semaines récentes",
    view: "Voir",
    utensil_thermomix: "Thermomix",
    utensil_oven: "Four",
    utensil_airfryer: "Airfryer",
    utensil_pan: "Poêle",
    utensil_nocook: "Sans cuisson",
    utensil_multi: "Multi",
    protein_chicken: "Poulet",
    protein_beef: "Boeuf",
    protein_pork: "Porc",
    protein_fish: "Poisson",
    protein_seafood: "Fruits de mer",
    protein_vegetarian: "Végétarien",
  },
};

function t(key, ...args) {
  const value = translations[currentLanguage][key];
  return typeof value === "function" ? value(...args) : value;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key) return;
    node.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    if (!key) return;
    node.setAttribute("placeholder", t(key));
  });
  if (languageSelect) languageSelect.value = currentLanguage;
}

const ingredientTranslationsFr = {
  "butter": "beurre",
  "potatoes": "pommes de terre",
  "garlic cloves": "gousses d'ail",
  "garlic clove": "gousse d'ail",
  "thickened cream": "crème épaisse",
  "cream": "crème",
  "milk": "lait",
  "nutmeg": "muscade",
  "salt": "sel",
  "black pepper": "poivre noir",
  "chicken thighs": "hauts de cuisse de poulet",
  "chicken breast": "blanc de poulet",
  "chicken tenderloins": "aiguillettes de poulet",
  "red capsicum": "poivron rouge",
  "capsicum": "poivron",
  "tomatoes": "tomates",
  "tomato": "tomate",
  "cucumber": "concombre",
  "brown onion": "oignon",
  "red onion": "oignon rouge",
  "white onion": "oignon blanc",
  "yellow onion": "oignon jaune",
  "onion": "oignon",
  "olive oil": "huile d'olive",
  "paprika": "paprika",
  "smoked paprika": "paprika fume",
  "sweet paprika": "paprika doux",
  "mixed herbs": "herbes mélangées",
  "bay leaf": "feuille de laurier",
  "plain flour": "farine",
  "broccolini": "broccolini",
  "shallot": "échalote",
  "chicken stock": "bouillon de poulet",
  "fresh thyme": "thym frais",
  "dijon mustard": "moutarde de Dijon",
  "fresh spinach": "épinards frais",
  "spinach": "épinards",
  "tomato puree": "purée de tomate",
  "tomato pulp": "pulpe de tomate",
  "diced tomatoes": "tomates en dés",
  "crushed tomatoes": "tomates concassées",
  "tomato paste": "concentré de tomate",
  "canned tomatoes": "tomates en conserve",
  "canned chickpeas": "pois chiches en conserve",
  "red kidney beans": "haricots rouges",
  "black beans": "haricots noirs",
  "coconut milk": "lait de coco",
  "curry powder": "curry",
  "chilli powder": "poudre de chili",
  "turmeric": "curcuma",
  "pineapple": "ananas",
  "couscous": "couscous",
  "pearl couscous": "couscous perlé",
  "lemon juice": "jus de citron",
  "lemon": "citron",
  "lime": "citron vert",
  "mint": "menthe",
  "quinoa": "quinoa",
  "rice": "riz",
  "butternut pumpkin": "courge butternut",
  "dried cranberries": "cranberries séchées",
  "goat cheese": "fromage de chèvre",
  "pepitas": "graines de courge",
  "honey": "miel",
  "cumin": "cumin",
  "parmesan": "parmesan",
  "water": "eau",
  "hot water": "eau chaude",
  "vegetable stock": "bouillon de légumes",
  "frozen peas": "petits pois surgelés",
  "white fish fillets": "filets de poisson blanc",
  "carrot": "carotte",
  "ground ginger": "gingembre moulu",
  "chilli flakes": "flocons de piment",
  "green lentils": "lentilles vertes",
  "split peas": "pois cassés",
  "brussels sprouts": "choux de Bruxelles",
  "ground coriander": "coriandre moulue",
  "zucchini": "courgettes",
  "round zucchini": "courgettes rondes",
  "eggplants": "aubergines",
  "eggplant": "aubergine",
  "ground beef": "bœuf haché",
  "beef mince": "bœuf haché",
  "cinnamon": "cannelle",
  "ricotta": "ricotta",
  "mozzarella": "mozzarella",
  "basil": "basilic",
  "egg": "œuf",
  "eggs": "œufs",
  "gruyere": "gruyère",
  "dried rosemary": "romarin séché",
  "dried thyme": "thym séché",
  "thyme": "thym",
  "dried oregano": "origan séché",
  "oregano": "origan",
  "dried basil": "basilic séché",
  "herbes de provence": "herbes de Provence",
  "lasagne sheets": "feuilles de lasagne",
  "swiss chard": "blettes",
  "cannellini beans": "haricots cannellini",
  "almonds": "amandes",
  "grated cheese": "fromage râpé",
  "creamy plant base": "crème végétale",
  "ground pork": "porc haché",
  "breadcrumbs": "chapelure",
  "fennel bulb": "bulbe de fenouil",
  "fennel seeds": "graines de fenouil",
};

function translateIngredientItem(item) {
  if (currentLanguage !== "fr") return item;
  const key = item.toLowerCase();
  return ingredientTranslationsFr[key] || item;
}

function getRecipeName(recipe) {
  if (currentLanguage === "fr" && recipe.name_fr) return recipe.name_fr;
  return recipe.name;
}

function getRecipeSteps(recipe) {
  if (currentLanguage === "fr" && recipe.steps_fr) return recipe.steps_fr;
  return recipe.steps;
}
const jumpPlanner = document.getElementById("jump-planner");
const jumpCook = document.getElementById("jump-cook");

if (jumpPlanner) {
  jumpPlanner.addEventListener("click", () => {
    document.getElementById("planner").scrollIntoView({ behavior: "smooth" });
  });
}

if (jumpCook) {
  jumpCook.addEventListener("click", () => {
    document.getElementById("cook").scrollIntoView({ behavior: "smooth" });
  });
}

function saveState() {
  selectedRecipesByWeek[currentWeekKey] = [...selectedRecipes];
  checkedItemsByWeek[currentWeekKey] = { ...checkedItems };
  selectedServingsByWeek[currentWeekKey] = { ...selectedServings };
  safeSetItem("pantryPicksByWeek", JSON.stringify(selectedRecipesByWeek));
  safeSetItem("pantryChecksByWeek", JSON.stringify(checkedItemsByWeek));
  safeSetItem("pantryServingsByWeek", JSON.stringify(selectedServingsByWeek));
}

function getRecipeById(id) {
  return recipes.find((recipe) => recipe.id === id);
}

function renderPickList() {
  pickList.innerHTML = "";
  const count = selectedRecipes.length;
  const summary = document.createElement("p");
  summary.textContent = count ? t("pick_summary", count) : t("pick_summary_empty");
  pickList.appendChild(summary);

  if (!count) return;

  selectedRecipes.forEach((recipeId) => {
    const recipe = getRecipeById(recipeId);
    if (!recipe) return;
    const row = document.createElement("div");
    row.className = "pick-item";

    const left = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = getRecipeName(recipe);
    const meta = document.createElement("span");
    const utensil = getUtensilLabel(recipe);
    const protein = getProteinLabel(recipe);
    const servingCount = selectedServings[recipeId] || recipe.servings;
    meta.textContent = `${recipe.time} · ${servingCount} ${t("servings_label")} · ${utensil} · ${protein}`;
    left.append(title, meta);

    const controls = document.createElement("div");
    controls.className = "serving-controls";
    const label = document.createElement("span");
    label.textContent = t("servings_label");
    const minus = document.createElement("button");
    minus.className = "ghost";
    minus.textContent = "-";
    minus.addEventListener("click", () => {
      const current = selectedServings[recipeId] || recipe.servings;
      if (current > 1) {
        selectedServings[recipeId] = current - 1;
        saveState();
        refreshAll();
      }
    });
    const count = document.createElement("span");
    count.className = "count";
    count.textContent = String(selectedServings[recipeId] || recipe.servings);

    const plus = document.createElement("button");
    plus.className = "ghost";
    plus.textContent = "+";
    plus.addEventListener("click", () => {
      const current = selectedServings[recipeId] || recipe.servings;
      selectedServings[recipeId] = current + 1;
      saveState();
      refreshAll();
    });
    controls.append(label, plus, count, minus);

    const removeBtn = document.createElement("button");
    removeBtn.className = "ghost";
    removeBtn.textContent = t("remove");
    removeBtn.addEventListener("click", () => {
      selectedRecipes = selectedRecipes.filter((id) => id !== recipeId);
      delete selectedServings[recipeId];
      saveState();
      refreshAll();
    });

    row.append(left, controls, removeBtn);
    pickList.appendChild(row);

    if (recipeId === lastAddedRecipeId) {
      row.classList.add("pick-item-highlight");
      setTimeout(() => {
        row.classList.remove("pick-item-highlight");
      }, 900);
    }
  });
}

function getUtensilLabel(recipe) {
  const tags = recipe.tags || [];
  if (tags.includes("thermomix")) return t("utensil_thermomix");
  if (tags.includes("oven")) return t("utensil_oven");
  if (tags.includes("airfryer")) return t("utensil_airfryer");
  if (tags.includes("pan")) return t("utensil_pan");
  if (tags.includes("no-cook")) return t("utensil_nocook");
  return t("utensil_multi");
}

function getProteinLabel(recipe) {
  const items = recipe.ingredients.map((ing) => ing.item.toLowerCase());
  if (items.some((item) => item.includes("chicken"))) return t("protein_chicken");
  if (items.some((item) => item.includes("beef"))) return t("protein_beef");
  if (items.some((item) => item.includes("pork"))) return t("protein_pork");
  if (items.some((item) => item.includes("fish"))) return t("protein_fish");
  if (items.some((item) => item.includes("salmon"))) return t("protein_fish");
  if (items.some((item) => item.includes("prawn"))) return t("protein_seafood");
  if (items.some((item) => item.includes("lamb"))) return t("protein_beef");
  if (items.some((item) => item.includes("chickpea") || item.includes("lentil") || item.includes("bean"))) {
    return t("protein_vegetarian");
  }
  return t("protein_vegetarian");
}

function getProteinKey(recipe) {
  const items = recipe.ingredients.map((ing) => ing.item.toLowerCase());
  if (items.some((item) => item.includes("chicken"))) return "chicken";
  if (items.some((item) => item.includes("beef"))) return "beef";
  if (items.some((item) => item.includes("pork"))) return "pork";
  if (items.some((item) => item.includes("fish"))) return "fish";
  if (items.some((item) => item.includes("salmon"))) return "fish";
  if (items.some((item) => item.includes("prawn"))) return "seafood";
  if (items.some((item) => item.includes("lamb"))) return "beef";
  return "vegetarian";
}

function getMealType(recipe) {
  const name = recipe.name.toLowerCase();
  const tags = recipe.tags || [];
  if (name.includes("soup") || name.includes("soupy") || name.includes("harira")) return "soup";
  if (tags.includes("salad") || name.includes("tabbouleh") || name.includes("taboule") || name.includes("salad")) return "salad";
  if (tags.includes("oven") || name.includes("gratin") || name.includes("lasagne") || name.includes("quiche") || name.includes("tian") || name.includes("moussaka") || name.includes("parmigiana")) {
    return "bake";
  }
  return "main";
}

function computeTimeBreakdown(recipe) {
  let cook = 0;
  let prep = 0;
  const cookWords = ["cook", "bake", "roast", "simmer", "saute", "sauté", "boil", "grill", "fry", "sear", "blanch", "preheat"];
  recipe.steps.forEach((step) => {
    const match = step.match(/\((\d+)\s*min/i);
    if (!match) return;
    const minutes = parseInt(match[1], 10);
    const lower = step.toLowerCase();
    const isCook = cookWords.some((word) => lower.includes(word));
    if (isCook) cook += minutes;
    else prep += minutes;
  });
  const totalMatch = recipe.time.match(/(\d+)/);
  const total = totalMatch ? parseInt(totalMatch[1], 10) : cook + prep;
  if (cook + prep === 0) {
    return { total, cook: Math.max(0, total - 10), prep: Math.min(10, total) };
  }
  if (cook + prep !== total) {
    const ratio = total / (cook + prep);
    cook = Math.round(cook * ratio);
    prep = Math.max(0, total - cook);
  }
  return { total, cook, prep };
}

function getLastSelectedWeekKey(recipeId) {
  let lastKey = null;
  let lastDate = null;
  Object.keys(selectedRecipesByWeek).forEach((weekKey) => {
    const picks = selectedRecipesByWeek[weekKey] || [];
    if (!picks.includes(recipeId)) return;
    const [yearPart, weekPart] = weekKey.split("-W");
    const year = parseInt(yearPart, 10);
    const week = parseInt(weekPart, 10);
    if (!year || !week) return;
    const date = getDateFromISOWeek(year, week);
    if (!lastDate || date > lastDate) {
      lastDate = date;
      lastKey = weekKey;
    }
  });
  return lastKey;
}

function getWeeksBetween(weekKeyA, weekKeyB) {
  if (!weekKeyA || !weekKeyB) return null;
  const [yearA, weekA] = weekKeyA.split("-W").map((value) => parseInt(value, 10));
  const [yearB, weekB] = weekKeyB.split("-W").map((value) => parseInt(value, 10));
  if (!yearA || !weekA || !yearB || !weekB) return null;
  const dateA = getDateFromISOWeek(yearA, weekA);
  const dateB = getDateFromISOWeek(yearB, weekB);
  const diffWeeks = Math.round((dateA - dateB) / (7 * 24 * 60 * 60 * 1000));
  return diffWeeks;
}

function getLastSelectedLabel(recipeId) {
  const lastKey = getLastSelectedWeekKey(recipeId);
  if (!lastKey) return `x ${t("never_selected")}`;
  const weekKey = currentWeekKey || getCurrentWeekKey();
  const diff = getWeeksBetween(weekKey, lastKey);
  const weeks = diff === null ? 0 : Math.max(0, diff);
  return t("last_selected", weeks);
}

function renderRecentWeeks() {
  recentWeeks.innerHTML = "";
  const weeks = Object.keys(selectedRecipesByWeek).sort().reverse();
  if (!weeks.length) return;

  const title = document.createElement("strong");
  title.textContent = t("recent_weeks");
  recentWeeks.appendChild(title);

  weeks.slice(0, 4).forEach((weekKey) => {
    const row = document.createElement("div");
    row.textContent = formatWeekLabel(weekKey);

    const button = document.createElement("button");
    button.className = "ghost";
    button.textContent = t("view");
    button.addEventListener("click", () => {
      if (topWeekPicker) topWeekPicker.value = weekKey;
      setWeekFromTopPicker();
    });

    row.appendChild(button);
    recentWeeks.appendChild(row);
  });
}

function renderRecipeGrid() {
  recipeGrid.innerHTML = "";
  const query = (recipeSearch?.value || "").toLowerCase().trim();
  const utensilFilter = filterUtensil?.value || "all";
  const proteinFilter = filterProtein?.value || "all";
  const mealFilter = filterMeal?.value || "all";

  recipes
    .filter((recipe) => {
      const matchesQuery =
        !query ||
        getRecipeName(recipe).toLowerCase().includes(query) ||
        recipe.ingredients.some((ing) => ing.item.toLowerCase().includes(query));
      const matchesUtensil =
        utensilFilter === "all" ||
        (utensilFilter === "multi" ? getUtensilLabel(recipe) === t("utensil_multi") : (recipe.tags || []).includes(utensilFilter));
      const matchesProtein = proteinFilter === "all" || getProteinKey(recipe) === proteinFilter;
      const matchesMeal = mealFilter === "all" || getMealType(recipe) === mealFilter;
      return matchesQuery && matchesUtensil && matchesProtein && matchesMeal;
    })
    .forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    const info = document.createElement("div");
    info.className = "recipe-info";
    const title = document.createElement("h3");
    title.className = "recipe-title";
    title.textContent = getRecipeName(recipe);
    const line = document.createElement("div");
    line.className = "recipe-line";
    const utensil = getUtensilLabel(recipe);
    const protein = getProteinLabel(recipe);
    const lastSelected = getLastSelectedLabel(recipe.id);
    const time = computeTimeBreakdown(recipe);
    line.textContent = `${t("time_total")} ${time.total} min · ${t("time_cook")} ${time.cook} min · ${recipe.servings} ${t("servings_label")} · ${utensil} · ${protein} · ${lastSelected}`;
    info.append(title, line);

    const actionWrap = document.createElement("div");

    const actionBtn = document.createElement("button");
    actionBtn.className = "ghost";
    actionBtn.textContent = selectedRecipes.includes(recipe.id)
      ? t("remove_from_picks")
      : t("add_to_picks");
    actionBtn.addEventListener("click", () => {
      if (selectedRecipes.includes(recipe.id)) {
        selectedRecipes = selectedRecipes.filter((id) => id !== recipe.id);
        delete selectedServings[recipe.id];
      } else {
        selectedRecipes = [...selectedRecipes, recipe.id];
        if (!selectedServings[recipe.id]) selectedServings[recipe.id] = recipe.servings;
      }
      saveState();
      refreshAll();
    });
    actionWrap.appendChild(actionBtn);

    card.append(info, actionWrap);
    recipeGrid.appendChild(card);
  });
}

function normalizeShoppingItem(item) {
  const name = item.toLowerCase().trim();
  if (name === "water" || name === "hot water") return null;
  if (name === "brown onion" || name === "white onion" || name === "yellow onion") return "onion";
  if (name === "tomato" || name === "tomatoes" || name === "canned tomatoes" || name === "diced tomatoes" || name === "crushed tomatoes") {
    return "tomatoes";
  }
  return name;
}

function aggregateShoppingList() {
  const counts = {};
  selectedRecipes.forEach((recipeId) => {
    const recipe = getRecipeById(recipeId);
    if (!recipe) return;
    const servings = selectedServings[recipeId] || recipe.servings;
    recipe.ingredients.forEach((ingredient) => {
      const normalized = normalizeShoppingItem(ingredient.item);
      if (!normalized) return;
      const key = `${normalized}|${ingredient.unit}`;
      const scaledQty = (ingredient.qty / recipe.servings) * servings;
      if (!counts[key]) {
        counts[key] = { ...ingredient, item: normalized, qty: scaledQty };
      } else {
        counts[key].qty += scaledQty;
      }
    });
  });
  return Object.values(counts).sort((a, b) => a.item.localeCompare(b.item));
}

function renderShoppingList() {
  shoppingList.innerHTML = "";
  const items = aggregateShoppingList();
  if (!items.length) {
    shoppingList.innerHTML = `<p>${t("shopping_empty")}</p>`;
    return;
  }

  const grouped = groupShoppingItems(items);
  grouped.forEach(([category, list]) => {
    const heading = document.createElement("div");
    heading.className = "shop-heading";
    heading.textContent = category;
    shoppingList.appendChild(heading);

    list.forEach((ingredient) => {
      const key = `${ingredient.item}|${ingredient.unit}`;
      const row = document.createElement("label");
      row.className = "shop-item";

      const left = document.createElement("span");
      const displayQty = formatQuantity(ingredient.qty, ingredient.unit);
      const displayItem = translateIngredientItem(ingredient.item);
      left.textContent = `${displayItem} — ${displayQty} ${ingredient.unit}`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = Boolean(checkedItems[key]);
      if (checkbox.checked) row.classList.add("is-checked");
      checkbox.addEventListener("change", (event) => {
        checkedItems[key] = event.target.checked;
        row.classList.toggle("is-checked", event.target.checked);
        saveState();
      });

      row.append(left, checkbox);
      shoppingList.appendChild(row);
    });
  });
}

function formatQuantity(qty, unit) {
  const unitKey = (unit || "").toLowerCase();
  const countUnits = new Set([
    "pcs",
    "stalks",
    "bunch",
    "head",
    "pack",
    "can",
    "cans",
    "sheet",
  ]);

  if (countUnits.has(unitKey)) {
    return Math.ceil(qty);
  }

  if (unitKey === "g" || unitKey === "ml") {
    return Math.ceil(qty / 10) * 10;
  }

  if (unitKey === "cup" || unitKey === "cups") {
    return Math.ceil(qty * 4) / 4;
  }

  if (unitKey === "tbsp") {
    return Math.ceil(qty * 2) / 2;
  }

  if (unitKey === "tsp") {
    return Math.ceil(qty * 4) / 4;
  }

  const rounded = Math.round(qty * 100) / 100;
  return Number.isInteger(rounded) ? rounded : rounded.toFixed(2);
}

function groupShoppingItems(items) {
  const order = [
    "Produce",
    "Meat & Seafood",
    "Dairy",
    "Grains & Pasta",
    "Canned & Jarred",
    "Frozen",
    "Pantry",
  ];

  const pantryItems = new Set([
    "olive oil",
    "butter",
    "salt",
    "black pepper",
    "pepper",
    "nutmeg",
    "cumin",
    "paprika",
    "turmeric",
    "curry powder",
    "oregano",
    "thyme",
    "mixed herbs",
    "herbes de provence",
    "chilli powder",
    "chilli flakes",
    "bay leaf",
    "mustard",
    "dijon mustard",
  ]);

  const categories = new Map();

  items.forEach((ingredient) => {
    const name = ingredient.item.toLowerCase();
    let category = "Pantry";

    if (pantryItems.has(name)) {
      category = "Pantry";
    } else if (name === "tomato" || name === "tomatoes") {
      category = "Produce";
    } else if (/(chicken|beef|pork|lamb|fish|salmon|prawn|turkey)/.test(name)) {
      category = "Meat & Seafood";
    } else if (/(milk|cream|cheese|ricotta|parmesan|gruyere|mozzarella|goat cheese|butter)/.test(name)) {
      category = "Dairy";
    } else if (/(rice|pasta|lasagne|couscous|quinoa|flour|breadcrumbs)/.test(name)) {
      category = "Grains & Pasta";
    } else if (/(canned|can|beans|chickpeas|lentils|puree|paste|pulp|stock)/.test(name)) {
      category = "Canned & Jarred";
    } else if (/(frozen|peas)/.test(name)) {
      category = "Frozen";
    } else {
      category = "Produce";
    }

    if (!categories.has(category)) categories.set(category, []);
    categories.get(category).push(ingredient);
  });

  // Sort items within each category alphabetically
  categories.forEach((list, key) => {
    list.sort((a, b) => a.item.localeCompare(b.item));
    categories.set(key, list);
  });

  // Ensure pantry is last
  const ordered = [];
  order.forEach((cat) => {
    if (categories.has(cat)) ordered.push([cat, categories.get(cat)]);
  });
  return ordered;
}

function formatIngredientForDisplay(ingredient, scaledQty) {
  const unitKey = (ingredient.unit || "").toLowerCase();
  const itemKey = ingredient.item.toLowerCase();
  const cupToGram = {
    "parmesan": 100,
    "light cheese": 120,
    "mozzarella light": 120,
    "feta": 150,
    "ricotta": 250,
    "breadcrumbs": 60,
    "wholemeal breadcrumbs": 60,
    "quinoa": 170,
    "brown rice": 190,
    "jasmine rice": 190,
    "couscous": 180,
    "pearled barley": 200,
    "spaghetti": 100,
    "wholemeal pasta": 100,
  };

  if ((unitKey === "cup" || unitKey === "cups") && cupToGram[itemKey]) {
    const grams = scaledQty * cupToGram[itemKey];
    const displayQty = formatQuantity(grams, "g");
    const displayItem = translateIngredientItem(ingredient.item);
    return `${displayItem}: ${displayQty} g`;
  }

  const displayQty = formatQuantity(scaledQty, ingredient.unit);
  const displayItem = translateIngredientItem(ingredient.item);
  return `${displayItem}: ${displayQty} ${ingredient.unit}`;
}

function renderCookSelect() {
  cookSelect.innerHTML = "";
  const planIds = Array.from(new Set(selectedRecipesByWeek[cookWeekKey] || []));
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = planIds.length ? t("cook_select") : t("cook_placeholder");
  cookSelect.appendChild(placeholder);

  planIds.forEach((recipeId) => {
    const recipe = getRecipeById(recipeId);
    if (!recipe) return;
    const option = document.createElement("option");
    option.value = recipe.id;
    option.textContent = getRecipeName(recipe);
    cookSelect.appendChild(option);
  });
}

function renderCookCard(recipeId) {
  const recipe = getRecipeById(recipeId);
  if (!recipe) return;
  let servings = (selectedServingsByWeek[cookWeekKey] || {})[recipeId] || recipe.servings;

  const render = () => {
    cookCard.innerHTML = "";
    const header = document.createElement("div");
    header.className = "cook-header";

    const title = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = getRecipeName(recipe);
    const meta = document.createElement("p");
    meta.textContent = `${recipe.time} · ${servings} ${t("servings_label")}`;
    title.append(h3, meta);

    const controls = document.createElement("div");
    const minus = document.createElement("button");
    minus.className = "ghost";
    minus.textContent = "-";
    minus.addEventListener("click", () => {
      if (servings > 1) servings -= 1;
      if (!selectedServingsByWeek[cookWeekKey]) selectedServingsByWeek[cookWeekKey] = {};
      selectedServingsByWeek[cookWeekKey][recipeId] = servings;
      saveState();
      renderPickList();
      renderShoppingList();
      render();
    });
    const plus = document.createElement("button");
    plus.className = "ghost";
    plus.textContent = "+";
    plus.addEventListener("click", () => {
      servings += 1;
      if (!selectedServingsByWeek[cookWeekKey]) selectedServingsByWeek[cookWeekKey] = {};
      selectedServingsByWeek[cookWeekKey][recipeId] = servings;
      saveState();
      renderPickList();
      renderShoppingList();
      render();
    });

    controls.append(minus, plus);
    header.append(title, controls);

    const ingredients = document.createElement("div");
    ingredients.className = "cook-ingredients";
    recipe.ingredients.forEach((ingredient) => {
      const item = document.createElement("div");
      const scaled = (ingredient.qty / recipe.servings) * servings;
      item.textContent = `• ${formatIngredientForDisplay(ingredient, scaled)}`;
      ingredients.appendChild(item);
    });

    const steps = document.createElement("div");
    steps.className = "cook-steps";
    getRecipeSteps(recipe).forEach((step, index) => {
      const stepCard = document.createElement("div");
      stepCard.className = "step";
      stepCard.textContent = `${index + 1}. ${step}`;
      steps.appendChild(stepCard);
    });

    cookCard.append(header, ingredients, steps);
  };

  render();
}

function renderCookEmpty() {
  cookCard.innerHTML = `
    <div class="empty-state">
      <h3>${t("cook_empty_title")}</h3>
      <p>${t("cook_empty_sub")}</p>
    </div>
  `;
}

function renderMiniGrid() {
  if (!miniGrid) return;
  miniGrid.innerHTML = "";
  const weekLabelText = currentWeekKey ? formatWeekLabel(currentWeekKey) : t("summary_week");
  const recipeCount = selectedRecipes.length;
  const missingCount = aggregateShoppingList().filter(
    (ingredient) => !checkedItems[`${ingredient.item}|${ingredient.unit}`]
  ).length;

  const summaries = [
    { label: t("summary_week"), value: weekLabelText },
    { label: t("summary_recipes"), value: String(recipeCount) },
    { label: t("summary_missing"), value: String(missingCount) },
  ];

  summaries.forEach((summary) => {
    const card = document.createElement("div");
    card.className = "mini-slot";
    const label = document.createElement("div");
    label.className = "mini-label";
    label.textContent = summary.label;
    const value = document.createElement("div");
    value.className = "mini-value";
    value.textContent = summary.value;
    card.append(label, value);
    miniGrid.appendChild(card);
  });
}

function formatWeekLabel(weekKey) {
  if (!weekKey) return "";
  const [yearPart, weekPart] = weekKey.split("-W");
  const year = parseInt(yearPart, 10);
  const week = parseInt(weekPart, 10);
  if (!year || !week) return "";
  const date = getDateFromISOWeek(year, week);
  const locale = currentLanguage === "fr" ? "fr-FR" : "en-AU";
  const label = date.toLocaleDateString(locale, { weekday: "long", day: "numeric", month: "short", year: "numeric" });
  return currentLanguage === "fr" ? `Semaine du ${label}` : `Week starting ${label}`;
}

function getDateFromISOWeek(year, week) {
  const simple = new Date(Date.UTC(year, 0, 1 + (week - 1) * 7));
  const dow = simple.getUTCDay();
  const ISOweekStart = new Date(simple);
  if (dow <= 4) {
    ISOweekStart.setUTCDate(simple.getUTCDate() - simple.getUTCDay() + 1);
  } else {
    ISOweekStart.setUTCDate(simple.getUTCDate() + 8 - simple.getUTCDay());
  }
  return new Date(ISOweekStart.getUTCFullYear(), ISOweekStart.getUTCMonth(), ISOweekStart.getUTCDate());
}

function getWeekKeyFromDate(date) {
  const tmp = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = tmp.getUTCDay() || 7;
  tmp.setUTCDate(tmp.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(tmp.getUTCFullYear(), 0, 1));
  const weekNum = Math.ceil(((tmp - yearStart) / 86400000 + 1) / 7);
  return `${tmp.getUTCFullYear()}-W${String(weekNum).padStart(2, "0")}`;
}

function getWeekStartFromDate(date) {
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = start.getDay() || 7;
  start.setDate(start.getDate() - (day - 1));
  start.setHours(0, 0, 0, 0);
  return start;
}

function getCurrentWeekKey() {
  const today = new Date();
  const tmp = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
  const dayNum = tmp.getUTCDay() || 7;
  tmp.setUTCDate(tmp.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(tmp.getUTCFullYear(), 0, 1));
  const weekNum = Math.ceil(((tmp - yearStart) / 86400000 + 1) / 7);
  return `${tmp.getUTCFullYear()}-W${String(weekNum).padStart(2, "0")}`;
}

function setupWeekPicker({ input, trigger, popover, labelNode, onChange }) {
  if (!input || !trigger || !popover) return;
  let currentMonth = new Date();

  const updateTrigger = () => {
    const weekKey = input.value;
    if (labelNode) {
      labelNode.textContent = weekKey ? formatWeekLabel(weekKey) : "";
    }
    trigger.textContent = weekKey ? formatWeekLabel(weekKey) : t("week_select");
  };

  const render = () => {
    popover.innerHTML = "";
    const locale = currentLanguage === "fr" ? "fr-FR" : "en-AU";
    const monthLabel = currentMonth.toLocaleDateString(locale, { month: "long", year: "numeric" });

    const header = document.createElement("div");
    header.className = "week-header";
    const prev = document.createElement("button");
    prev.type = "button";
    prev.textContent = "←";
    prev.addEventListener("click", () => {
      currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
      render();
    });
    const title = document.createElement("div");
    title.className = "week-month";
    title.textContent = monthLabel;
    const next = document.createElement("button");
    next.type = "button";
    next.textContent = "→";
    next.addEventListener("click", () => {
      currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
      render();
    });
    header.append(prev, title, next);

    const grid = document.createElement("div");
    grid.className = "week-grid";
    const dayNames = currentLanguage === "fr"
      ? ["L", "M", "M", "J", "V", "S", "D"]
      : ["M", "T", "W", "T", "F", "S", "S"];
    dayNames.forEach((label) => {
      const day = document.createElement("div");
      day.className = "week-day week-day-label";
      day.textContent = label;
      grid.appendChild(day);
    });

    const monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const gridStart = getWeekStartFromDate(monthStart);
    const selectedWeekKey = input.value;
    const selectedStart = selectedWeekKey
      ? getDateFromISOWeek(parseInt(selectedWeekKey.split("-W")[0], 10), parseInt(selectedWeekKey.split("-W")[1], 10))
      : null;

    for (let i = 0; i < 42; i += 1) {
      const date = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i);
      const cell = document.createElement("div");
      cell.className = "week-day";
      cell.textContent = String(date.getDate());
      if (date.getMonth() !== currentMonth.getMonth()) cell.classList.add("is-out");

      if (selectedStart) {
        const diff = (date - selectedStart) / 86400000;
        if (diff >= 0 && diff <= 6) cell.classList.add("is-in-week");
        if (diff === 0) cell.classList.add("is-selected");
      }

      cell.addEventListener("click", () => {
        const weekKey = getWeekKeyFromDate(date);
        input.value = weekKey;
        onChange();
        updateTrigger();
        popover.classList.remove("open");
      });
      grid.appendChild(cell);
    }

    const actions = document.createElement("div");
    actions.className = "week-actions";
    const clearBtn = document.createElement("button");
    clearBtn.type = "button";
    clearBtn.textContent = t("week_clear");
    clearBtn.addEventListener("click", () => {
      input.value = "";
      onChange();
      updateTrigger();
      popover.classList.remove("open");
    });
    const thisWeek = document.createElement("button");
    thisWeek.type = "button";
    thisWeek.textContent = t("week_this");
    thisWeek.addEventListener("click", () => {
      input.value = getCurrentWeekKey();
      onChange();
      updateTrigger();
      popover.classList.remove("open");
    });
    actions.append(clearBtn, thisWeek);

    popover.append(header, grid, actions);
  };

  trigger.addEventListener("click", () => {
    popover.classList.toggle("open");
    render();
  });

  document.addEventListener("click", (event) => {
    if (!popover.contains(event.target) && !trigger.contains(event.target)) {
      popover.classList.remove("open");
    }
  });

  updateTrigger();
}

function setWeekFromTopPicker() {
  currentWeekKey = (topWeekPicker && topWeekPicker.value) || getCurrentWeekKey();
  cookWeekKey = currentWeekKey;
  selectedRecipes = [...(selectedRecipesByWeek[currentWeekKey] || [])];
  checkedItems = { ...(checkedItemsByWeek[currentWeekKey] || {}) };
  selectedServings = { ...(selectedServingsByWeek[currentWeekKey] || {}) };
  if (weekLabel) weekLabel.textContent = formatWeekLabel(currentWeekKey);
  if (cookWeekLabel) cookWeekLabel.textContent = formatWeekLabel(cookWeekKey);
  if (topWeekLabel) topWeekLabel.textContent = formatWeekLabel(currentWeekKey);
  renderCookSelect();
  const cookIds = selectedRecipesByWeek[cookWeekKey] || [];
  if (!currentCookRecipeId || !cookIds.includes(currentCookRecipeId)) {
    currentCookRecipeId = "";
    if (cookSelect) cookSelect.value = "";
    renderCookEmpty();
  }
  refreshAll();
}

function refreshAll() {
  applyTranslations();
  if (topWeekLabel) {
    topWeekLabel.textContent = currentWeekKey ? formatWeekLabel(currentWeekKey) : "";
  }
  if (currentWeekKey) {
    weekLabel.textContent = formatWeekLabel(currentWeekKey);
  }
  if (cookWeekKey) {
    if (cookWeekLabel) cookWeekLabel.textContent = formatWeekLabel(cookWeekKey);
  }
  renderPickList();
  renderShoppingList();
  renderCookSelect();
  renderMiniGrid();
  renderRecipeGrid();
  renderRecentWeeks();
  if (heroCount) {
    heroCount.textContent = t("selected_count", selectedRecipes.length);
  }
  if (currentCookRecipeId && (selectedRecipesByWeek[cookWeekKey] || []).includes(currentCookRecipeId)) {
    renderCookCard(currentCookRecipeId);
  }
}

refreshAll();

if (topWeekPicker) {
  topWeekPicker.value = getCurrentWeekKey();
}
setWeekFromTopPicker();

if (recipeSearch) {
  recipeSearch.addEventListener("input", () => renderRecipeGrid());
}
if (filterUtensil) {
  filterUtensil.addEventListener("change", () => renderRecipeGrid());
}
if (filterProtein) {
  filterProtein.addEventListener("change", () => renderRecipeGrid());
}
if (filterMeal) {
  filterMeal.addEventListener("change", () => renderRecipeGrid());
}

const startCook = document.getElementById("start-cook");
if (startCook) {
  startCook.addEventListener("click", () => {
    const selected = cookSelect.value;
    if (!selected) {
      renderCookEmpty();
      return;
    }
    currentCookRecipeId = selected;
    renderCookCard(selected);
  });
}

if (cookSelect) {
  cookSelect.addEventListener("change", () => {
    const selected = cookSelect.value;
    if (!selected) {
      currentCookRecipeId = "";
      renderCookEmpty();
      return;
    }
    currentCookRecipeId = selected;
    renderCookCard(selected);
  });
}

const clearChecks = document.getElementById("clear-checks");
if (clearChecks) {
  clearChecks.addEventListener("click", () => {
    checkedItems = {};
    saveState();
    renderShoppingList();
  });
}

const clearPlan = document.getElementById("clear-plan");
if (clearPlan) {
  clearPlan.addEventListener("click", () => {
    selectedRecipes = [];
    checkedItems = {};
    saveState();
    refreshAll();
    cookCard.innerHTML = `
      <div class="empty-state">
        <h3>${t("ready_title")}</h3>
        <p>${t("ready_sub")}</p>
      </div>
    `;
  });
}

if (topWeekPicker) {
  topWeekPicker.addEventListener("change", () => {
    setWeekFromTopPicker();
  });
}

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    currentLanguage = event.target.value;
    safeSetItem("pantryLanguage", currentLanguage);
    refreshAll();
  });
}
