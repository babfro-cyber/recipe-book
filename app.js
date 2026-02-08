const recipes = [
  {
    id: "gratin-dauphinois",
    name: "Gratin Dauphinois",
    name_fr: "Gratin Dauphinois",
    time: "85 min",
    servings: 6,
    tags: ["oven", "batch", "vegetarian"],
    ingredients: [
      { item: "butter", qty: 100, unit: "g" },
      { item: "potatoes", qty: 1.5, unit: "kg" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "thickened cream", qty: 300, unit: "ml" },
      { item: "milk", qty: 1, unit: "L" },
      { item: "nutmeg", qty: 1, unit: "pinch" },
      { item: "salt", qty: 1, unit: "pinch" },
      { item: "black pepper", qty: 1, unit: "pinch" },
    ],
    steps: [
      "Peel, wash and cut the potatoes into thin slices (NB: do not wash them AFTER slicing, as the starch is needed for the right consistency).",
      "Finely chop the garlic.",
      "Bring the milk, garlic, salt, pepper and nutmeg to a boil in a saucepan, then add the potatoes and let cook 10 to 15 minutes, depending on firmness.",
      "Preheat the oven to 180°C (thermostat 6) and butter a gratin dish using a sheet of paper towel.",
      "Place the drained potatoes in the dish. Cover with cream, then dot small knobs of butter on top.",
      "Bake for 50 minutes to 1 hour.",
    ],
    steps_fr: [
      "Eplucher, laver et couper les pommes de terre en rondelles fines (NB : ne pas les laver APRES les avoir coupees, car l'amidon est necessaire a une consistance correcte).",
      "Hacher l'ail tres finement.",
      "Porter a ebullition dans une casserole le lait, l'ail, le sel, le poivre et la muscade puis y plonger les pommes de terre et laisser cuire 10 a 15 min, selon leur fermete.",
      "Prechauffer le four a 180°C (thermostat 6) et beurrer un plat a gratin a l'aide d'une feuille de papier essuie-tout.",
      "Placer les pommes de terre egouttees dans le plat. Les recouvrir de creme, puis disposer des petites noix de beurre sur le dessus.",
      "Enfourner pour 50 min a 1 heure de cuisson.",
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
    ],
    steps: [
      "Chop the onion and garlic: Place in Thermomix bowl, mix 5 sec / Speed 5.",
      "Saute: Add olive oil and cook 3 min / 120°C / Speed 1.",
      "Cook the sliced bell peppers: Add the sliced peppers and cook 5 min / 120°C / Speed 1 / Reverse mode.",
      "Simmer the sauce: Add tomatoes, paprika, mixed herbs, and bay leaf. Cook 10 min / 100°C / Speed 1 / Reverse mode.",
      "Cook the chicken: Add the chicken thighs, season with salt and pepper, and cook 25 min / 100°C / Speed Spoon / Reverse mode.",
    ],
    steps_fr: [
      "Hacher l'oignon et l'ail : Placer dans le bol du Thermomix, mixer 5 sec / Vitesse 5.",
      "Sauter : Ajouter l'huile d'olive et cuire 3 min / 120°C / Vitesse 1.",
      "Cuire les poivrons : Ajouter les poivrons et cuire 5 min / 120°C / Vitesse 1 / sens inverse.",
      "Mijoter la sauce : Ajouter tomates, paprika, herbes melangees et feuille de laurier. Cuire 10 min / 100°C / Vitesse 1 / sens inverse.",
      "Cuire le poulet : Ajouter les cuisses de poulet, assaisonner avec sel et poivre, et cuire 25 min / 100°C / Vitesse cuillere / sens inverse.",
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
      { item: "water", qty: 1, unit: "L" },
      { item: "salt", qty: 1, unit: "tsp" },
      { item: "shallot", qty: 1, unit: "pcs" },
      { item: "chicken stock", qty: 500, unit: "ml" },
      { item: "fresh thyme", qty: 4, unit: "sprigs" },
      { item: "thickened cream", qty: 125, unit: "ml" },
      { item: "dijon mustard", qty: 2, unit: "tbsp" },
      { item: "black pepper", qty: 1, unit: "tsp" },
    ],
    steps: [
      "Warm oven: Set your oven to 75°C (or the keep warm setting).",
      "Season & flour chicken: Pat the chicken dry. Generously season both sides with salt & pepper. Lightly coat the chicken in flour.",
      "Sear the chicken: Heat 2 Tbsp olive oil in a large pan over medium-high heat. Sear chicken in batches 4 minutes on one side, 2–4 minutes on the other, until golden and cooked through. Add more oil if the pan gets dry. Transfer cooked chicken to an oven-safe dish and place in the warm oven.",
      "Blanch the broccolini: Bring a pot of salted water (salty like seawater) to a boil. Add broccolini, cover, and cook for 2 minutes. Drain and immediately transfer to a bowl of cold water if your chicken isn’t ready yet — this stops it overcooking.",
      "Sauté broccolini: Add 1 Tbsp olive oil to the same pan over medium-high heat. Add the broccolini (it may splatter) and sauté 1 minute. Return broccolini to the warm oven with the chicken.",
      "Make the sauce: In the same pan, add the shallot with a small splash of oil if needed. Cook 2–3 minutes, until soft. Add chicken stock and thyme. Simmer 3 minutes. Stir in cream and Dijon mustard. Simmer 5–6 minutes, until slightly thickened. Remove thyme stems and take off heat.",
      "Serve: Either return chicken and broccolini to the sauce, or plate and spoon sauce over the top.",
    ],
    steps_fr: [
      "Chauffer le four : Reglez le four a 75°C (ou mode maintien au chaud).",
      "Assaisonner et fariner le poulet : Secher le poulet. Assaisonner genereusement de sel et poivre. Fariner legerement.",
      "Saisir le poulet : Chauffer 2 c. a soupe d'huile d'olive dans une grande poele a feu moyen-vif. Saisir le poulet 4 minutes d'un cote, 2–4 minutes de l'autre, jusqu'a coloration et cuisson. Ajouter un peu d'huile si besoin. Mettre le poulet cuit dans un plat allant au four et le garder au chaud.",
      "Blanchir le broccolini : Porter une grande casserole d'eau salee a ebullition. Ajouter le broccolini, couvrir et cuire 2 minutes. Egoutter et plonger dans de l'eau froide si besoin pour stopper la cuisson.",
      "Sauter le broccolini : Ajouter 1 c. a soupe d'huile d'olive dans la meme poele. Ajouter le broccolini (attention aux projections) et sauter 1 minute. Remettre au chaud avec le poulet.",
      "Faire la sauce : Dans la meme poele, ajouter l'echalote avec un filet d'huile si besoin. Cuire 2–3 minutes jusqu'a ce qu'elle soit tendre. Ajouter le bouillon de poulet et le thym. Laisser mijoter 3 minutes. Ajouter la creme et la moutarde de Dijon. Laisser mijoter 5–6 minutes jusqu'a leger epaississement. Retirer les tiges de thym et retirer du feu.",
      "Servir : Remettre le poulet et le broccolini dans la sauce ou napper a l'assiette.",
    ],
  },
  {
    id: "curry-epinards-pois-chiche",
    name: "Spinach & Chickpea Coconut Curry",
    name_fr: "Curry d'epinards & pois chiche au lait de coco",
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
      { item: "curry powder", qty: 2.5, unit: "tsp" },
      { item: "turmeric", qty: 1, unit: "tsp" },
      { item: "olive oil", qty: 1, unit: "tbsp" },
      { item: "black pepper", qty: 1, unit: "pinch" },
    ],
    steps: [
      "Peel and slice the onion and garlic. Wash the spinach leaves.",
      "In a saute pan, heat the oil. Add the spices and stir for 1 minute to release the aromas. Add the onion then the garlic and saute for 2-3 minutes. Add a splash of water if needed.",
      "Add the tomato puree, coconut milk and pepper. Bring to a boil. Add the chickpeas, reduce the heat and simmer for about 10 minutes.",
      "Then add the spinach leaves and continue cooking for 5 minutes.",
    ],
    steps_fr: [
      "Epluchez et emincez l'oignon et les gousses d'ail. Lavez les feuilles d'epinards.",
      "Dans une sauteuse, faites chauffer l'huile. Ajoutez les epices et remuez pendant 1 minute pour liberer tous les aromes. Incorporez l'oignon puis l'ail et faites revenir l'ensemble pendant 2-3 minutes. Versez un fond d'eau si besoin.",
      "Incorporez la puree de tomates, le lait de coco et ajoutez le poivre. Portez l'ensemble a ebullition. Ajoutez les pois chiches, reduisez le feu et laissez mijoter environ 10 minutes.",
      "Ajoutez ensuite les feuilles d'epinards et poursuivez la cuisson 5 minutes.",
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
      { item: "creme fraiche", qty: 3, unit: "tbsp" },
      { item: "couscous", qty: 2, unit: "glass" },
    ],
    steps: [
      "Peel and cut the pineapple into small pieces.",
      "Saute the pineapple with a little olive oil in a pan.",
      "Meanwhile, cut the chicken into small pieces.",
      "Add the chicken to the pineapple (after about 5 minutes of cooking). Saute until the chicken is grilled and the pineapple caramelised.",
      "Meanwhile, cook the couscous in water: 1.5 glass of water for 1 glass of couscous.",
      "When the couscous and the chicken/pineapple mixture are cooked, add the couscous to the chicken/pineapple pan, add the creme fraiche, mix, and cook for 2 minutes.",
    ],
    steps_fr: [
      "Eplucher et couper en petits morceaux l'ananas.",
      "Faire revenir l'ananas avec un peu d'huile d'olive dans une poele.",
      "Pendant ce temps, couper le poulet en petits morceaux.",
      "Ajouter le poulet a l'ananas (au bout de 5min de cuisson environ). Faire revenir le tout jusqu'a ce que le poulet soit grille et l'ananas caramelise.",
      "Pendant ce temps, faire cuire le couscous dans l'eau : 1.5 verre d'eau pour 1 verre de couscous.",
      "Lorsque la semoule et le melange poulet/ananas sont cuits, ajouter la semoule a la poele poulet/ananas, ajouter la creme fraiche, melanger et faire revenir 2 minutes.",
    ],
  },
  {
    id: "tabbouleh",
    name: "Tabbouleh: the best recipe",
    name_fr: "Taboule : la meilleure recette",
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
      { item: "black pepper", qty: 1, unit: "pinch" },
    ],
    steps: [
      "Cook the couscous in water: 1.5 glass of water for 1 glass of couscous.",
      "Wash the tomatoes and capsicum, peel the cucumber and the onions, deseed the capsicum.",
      "Chop tomatoes, cucumber, and capsicum finely. Add everything to the couscous, drizzle with olive oil and lemon juice, mix.",
      "Finely chop the herbs with a knife and add them to the salad, mix well. Add a pinch of pepper and adjust the seasoning if needed.",
    ],
    steps_fr: [
      "Faire cuire le couscous dans l'eau : 1.5 verre d'eau pour 1 verre de couscous.",
      "Lavez les tomates et les poivrons, epluchez le concombre et les oignons, epepinez les poivrons.",
      "Emincez tomates, concombre et poivron finement. Ajoutez le tout au couscous, arrosez d'huile d'olive et de jus de citron, melangez.",
      "Hachez finement les herbes au couteau et ajoutez-les a la salade, melangez bien. Ajoutez une pincee de poivre et rectifiez l'assaisonnement si c'est necessaire.",
    ],
  },
  {
    id: "quinoa-butternut-cranberries",
    name: "Quinoa salad with honey-roasted butternut, goat cheese and cranberries",
    name_fr: "Salade de quinoa au butternut roti, chevre et cranberries",
    time: "35 min",
    servings: 4,
    tags: ["oven", "salad", "vegetarian", "batch"],
    ingredients: [
      { item: "quinoa", qty: 1, unit: "glass" },
      { item: "butternut pumpkin", qty: 1, unit: "pcs" },
      { item: "dried cranberries", qty: 1, unit: "handful" },
      { item: "goat cheese", qty: 6, unit: "cubes" },
      { item: "salt", qty: 1, unit: "pinch" },
      { item: "black pepper", qty: 1, unit: "pinch" },
      { item: "turmeric", qty: 0.5, unit: "tsp" },
      { item: "honey", qty: 1, unit: "tbsp" },
      { item: "olive oil", qty: 1.5, unit: "tbsp" },
      { item: "pepitas", qty: 0.5, unit: "glass" },
    ],
    steps: [
      "Peel the butternut squash and cut it into small pieces.",
      "Place them in a bowl and add olive oil, turmeric, honey, salt, and pepper. Mix well.",
      "Spread the mixture in an oven-safe dish and roast for 20 minutes at 200C until the butternut is tender.",
      "Cook the quinoa in boiling water for 10-15 minutes. Drain and set aside.",
      "Chop the dried cranberries into small pieces.",
      "Once the butternut is cooked, assemble the salad by mixing in the quinoa, goat cheese cubes, cranberries, and pepitas.",
    ],
    steps_fr: [
      "Eplucher le butternut squash et le couper en petits morceaux.",
      "Les placer dans un bol et ajouter huile d'olive, curcuma, miel, sel et poivre. Bien melanger.",
      "Etaler le melange dans un plat allant au four et faire rôtir 20 minutes a 200C jusqu'a ce que le butternut soit tendre.",
      "Cuire le quinoa dans l'eau bouillante pendant 10-15 minutes. Egoutter et reserver.",
      "Couper les cranberries sechees en petits morceaux.",
      "Une fois le butternut cuit, assembler la salade en melangeant le quinoa, les cubes de chevre, les cranberries et les pepitas.",
    ],
  },
  {
    id: "fajitas",
    name: "Mexican Fajitas",
    name_fr: "Fajitas mexicaines",
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
    ],
    steps: [
      "Cut capsicum and onions into small pieces.",
      "Saute capsicum and onions with a little olive oil in a pan.",
      "Meanwhile, cut the chicken into small pieces.",
      "Add the chicken to the pan of vegetables after about 10 minutes of cooking.",
      "Add 3 tsp cumin, 1 tsp paprika, and the tomato pulp.",
      "Cook until the chicken is grilled and cooked and the vegetables are soft. Serve.",
    ],
    steps_fr: [
      "Couper en petits morceaux poivrons et oignons.",
      "Faire revenir poivrons et oignons avec un peu d'huile d'olive dans une poele.",
      "Pendant ce temps, couper le poulet en petits morceaux.",
      "Ajouter le poulet a la poelee de legumes au bout de 10min de cuisson environ.",
      "Ajouter 3 cuilleres a cafe de cumin, 1 cuillere a cafe de paprika et la pulpe de tomates.",
      "Faire revenir le tout jusqu'a ce que le poulet soit grille et cuit, et les legumes fondants. Servir.",
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
      { item: "salt", qty: 1, unit: "pinch" },
      { item: "black pepper", qty: 1, unit: "pinch" },
    ],
    steps: [
      "Prepare the Crust:",
      "Preheat oven to 400°F (200°C).",
      "In a large bowl, toss butternut squash, capsicum, zucchini, red onion, and garlic with olive oil, rosemary, thyme, salt, and pepper.",
      "Spread vegetables in a single layer on a baking sheet and roast for 30 minutes, stirring halfway through.",
      "Add cannellini beans to the baking sheet, mix gently, and roast for another 10 minutes until vegetables are tender.",
      "Sprinkle with Parmesan cheese and broil for 2-3 minutes until cheese is golden.",
    ],
    steps_fr: [
      "Preparer la base :",
      "Prechauffer le four a 200°C.",
      "Dans un grand bol, melanger la courge butternut, le poivron, la courgette, l'oignon rouge et l'ail avec l'huile d'olive, le romarin, le thym, le sel et le poivre.",
      "Etaler les legumes en une seule couche sur une plaque et rôtir 30 minutes, en remuant a mi-cuisson.",
      "Ajouter les haricots cannellini sur la plaque, melanger delicatement, et rôtir encore 10 minutes jusqu'a ce que les legumes soient tendres.",
      "Parsemer de parmesan et gratiner 2-3 minutes jusqu'a ce que le fromage soit dore.",
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
      { item: "water", qty: 1400, unit: "g" },
      { item: "vegetable stock", qty: 2, unit: "tbsp" },
      { item: "frozen peas", qty: 1000, unit: "g" },
      { item: "mint", qty: 2, unit: "bunch" },
      { item: "cream", qty: 2, unit: "tbsp" },
    ],
    steps: [
      "Place onion and oil into mixing bowl and chop 3 sec/speed 6.",
      "Add water, stock and peas and cook 15 min/100C/speed 1.",
      "Add mint and cook 3 min/100C/speed 1.",
      "Add cream. Puree for 1 minute by bringing speed up slowly to speed 10.",
    ],
    steps_fr: [
      "Mettre l'oignon et l'huile dans le bol et mixer 3 sec/vitesse 6.",
      "Ajouter l'eau, le bouillon et les pois et cuire 15 min/100C/vitesse 1.",
      "Ajouter la menthe et cuire 3 min/100C/vitesse 1.",
      "Ajouter la creme. Mixer 1 minute en augmentant progressivement la vitesse jusqu'a 10.",
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
      "Heat olive oil in a pan. Saute the onion for 3 minutes.",
      "Add curry powder, turmeric, ginger, and chili flakes. Stir for 1 minute.",
      "Add carrots, bell pepper, and tomato. Cook for 5 minutes.",
      "Pour in the coconut milk, bring to a boil, then simmer for 10 minutes.",
      "Add the fish fillets, cover, and cook for 10 minutes until flaky.",
      "Finish with lime juice and serve with rice.",
    ],
    steps_fr: [
      "Faire chauffer l'huile d'olive dans une poele. Faire revenir l'oignon 3 minutes.",
      "Ajouter la poudre de curry, le curcuma, le gingembre et les flocons de piment. Remuer 1 minute.",
      "Ajouter les carottes, le poivron et la tomate. Cuire 5 minutes.",
      "Verser le lait de coco, porter a ebullition, puis laisser mijoter 10 minutes.",
      "Ajouter les filets de poisson, couvrir et cuire 10 minutes jusqu'a ce qu'ils soient tendres.",
      "Terminer avec le jus de citron vert et servir avec du riz.",
    ],
  },
  {
    id: "lentil-soup-thermomix",
    name: "Lentil Soup (Thermomix)",
    name_fr: "Soupe de lentilles vertes au Thermomix",
    time: "40 min",
    servings: 4,
    tags: ["thermomix", "vegetarian", "batch"],
    ingredients: [
      { item: "brown onion", qty: 1, unit: "pcs" },
      { item: "carrot", qty: 100, unit: "g" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "olive oil", qty: 10, unit: "g" },
      { item: "green lentils", qty: 200, unit: "g" },
      { item: "vegetable stock", qty: 1, unit: "tsp" },
      { item: "water", qty: 900, unit: "g" },
      { item: "salt", qty: 1, unit: "pinch" },
      { item: "black pepper", qty: 1, unit: "pinch" },
      { item: "creme fraiche", qty: 1, unit: "tsp" },
    ],
    steps: [
      "Put the onion cut in half, the carrot(s) cut into pieces and the garlic cloves into the Thermomix bowl.",
      "Add the lid with the measuring cup.",
      "Mix 5 sec/speed 5.",
      "Scrape down the sides of the bowl with the spatula.",
      "Add olive oil to the Thermomix bowl.",
      "Add the lid with the measuring cup.",
      "Saute 5 min/120C/speed 1.",
      "Add 200 g green lentils, the small spoon of vegetable stock and 900 g water to the Thermomix bowl.",
      "Add the lid with the measuring cup.",
      "Cook 35 min/100C/speed 1.",
      "Add salt, pepper and the small spoon of creme fraiche to the Thermomix bowl.",
      "Add the lid with the measuring cup.",
      "Blend 1 min/speed 5. Increase speed gradually up to 10.",
    ],
    steps_fr: [
      "Mettre l'oignon coupe en deux, le(s) carotte(s) coupee(s) en morceaux et les gousses d'ail dans le bol du Thermomix.",
      "Ajoutez le couvercle avec le gobelet doseur.",
      "Melanger 5 sec/vitesse 5.",
      "Racler les parois du bol avec la spatule.",
      "Ajouter l'huile d'olive dans le bol du Thermomix.",
      "Ajoutez le couvercle avec le gobelet doseur.",
      "Rissoler 5 min/120C/vitesse 1.",
      "Ajouter 200 grammes de lentilles vertes, la petite cuillere de bouillon et 900g d'eau dans le bol du Thermomix.",
      "Ajoutez le couvercle avec le gobelet doseur.",
      "Cuire 35 min/100C/vitesse 1.",
      "Ajouter sel, poivre et la petite cuillere de creme fraiche dans le bol du Thermomix.",
      "Ajoutez le couvercle avec le gobelet doseur.",
      "Melanger 1 min/vitesse 5. Augmentez progressivement la vitesse jusqu'a 10.",
    ],
  },
  {
    id: "lentils-brussels-skillet",
    name: "Lentils & Brussels Sprouts Skillet",
    name_fr: "Poelee de lentilles et choux de Bruxelles",
    time: "60 min",
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
      { item: "salt", qty: 1, unit: "pinch" },
      { item: "black pepper", qty: 1, unit: "pinch" },
    ],
    steps: [
      "Cook the lentils: Add 1 cup green lentils to a pot with 3 cups boiling water. Cover and simmer on medium for 15–20 minutes, until tender. Drain any extra water and set aside.",
      "Prep the Brussels sprouts: Wash them, trim the ends, remove loose outer leaves, and cut in half.",
      "Prep aromatics: Slice the onion thinly into half-moons. Thinly slice the garlic.",
      "Start cooking: Heat 1–2 Tbsp olive oil in a large pan. Add the onion and garlic and cook 3–4 minutes, until softened.",
      "Add spice: Add chilli flakes and cook 1 minute.",
      "Cook the Brussels sprouts: Add the halved Brussels sprouts to the pan. Cook 10 minutes, stirring occasionally, until browned and just tender.",
      "Combine: Add the cooked lentils. Cook another 5 minutes, stirring to mix everything well.",
      "Finish: Season with salt and pepper to taste. Squeeze in lemon juice and taste again — add more chili, salt, or lemon if you like.",
    ],
    steps_fr: [
      "Cuire les lentilles : Ajouter 1 tasse de lentilles vertes dans une casserole avec 3 tasses d'eau bouillante. Couvrir et mijoter a feu moyen 15–20 minutes, jusqu'a tendres. Egoutter et reserver.",
      "Preparer les choux de Bruxelles : Les laver, couper les extremites, enlever les feuilles abimees, et couper en deux.",
      "Preparer les aromates : Emincer l'oignon en demi-lunes. Emincer finement l'ail.",
      "Commencer la cuisson : Chauffer 1–2 c. a soupe d'huile d'olive dans une grande poele. Ajouter oignon et ail et cuire 3–4 minutes, jusqu'a ce qu'ils soient tendres.",
      "Ajouter l'epice : Ajouter les flocons de piment et cuire 1 minute.",
      "Cuire les choux de Bruxelles : Ajouter les choux et cuire 10 minutes, en remuant de temps en temps, jusqu'a ce qu'ils soient dores et juste tendres.",
      "Assembler : Ajouter les lentilles cuites. Cuire encore 5 minutes en remuant.",
      "Finir : Assaisonner avec sel et poivre. Presser le jus de citron et gouter — ajuster piment, sel ou citron si besoin.",
    ],
  },
  {
    id: "harira-lentil-chickpea",
    name: "Moroccan Lentil & Chickpea Soup (Harira)",
    name_fr: "Soupe marocaine lentilles et pois chiches (Harira)",
    time: "45 min",
    servings: 6,
    tags: ["pan", "vegetarian", "batch"],
    ingredients: [
      { item: "green lentils", qty: 200, unit: "g" },
      { item: "canned chickpeas", qty: 400, unit: "g" },
      { item: "brown onion", qty: 2, unit: "pcs" },
      { item: "carrot", qty: 2, unit: "pcs" },
      { item: "garlic cloves", qty: 3, unit: "pcs" },
      { item: "diced tomatoes", qty: 800, unit: "g" },
      { item: "vegetable stock", qty: 0.5, unit: "L" },
      { item: "olive oil", qty: 2, unit: "tbsp" },
      { item: "cumin", qty: 2, unit: "tsp" },
      { item: "ground coriander", qty: 1, unit: "tsp" },
      { item: "paprika", qty: 1, unit: "tsp" },
      { item: "turmeric", qty: 1, unit: "tsp" },
      { item: "fresh coriander", qty: 1, unit: "bunch" },
      { item: "lemon", qty: 1, unit: "pcs" },
      { item: "salt", qty: 1, unit: "pinch" },
      { item: "black pepper", qty: 1, unit: "pinch" },
    ],
    steps: [
      "Heat oil in a large pot. Saute onions, carrots, and garlic 5 min.",
      "Add cumin, coriander, paprika and turmeric. Cook 1 min, stirring.",
      "Add tomatoes, stock and lentils. Cook 25 min on medium heat.",
      "Add chickpeas and cook 10 min more.",
      "Season with salt and pepper, add lemon juice. Serve hot with fresh coriander.",
    ],
    steps_fr: [
      "Chauffer l'huile dans une grande casserole. Faire revenir oignons, carottes et ail 5 min.",
      "Ajouter cumin, coriandre, paprika et curcuma. Cuire 1 min en melangeant.",
      "Ajouter tomates, bouillon et lentilles. Cuire 25 min a feu moyen.",
      "Ajouter pois chiches et cuire encore 10 min.",
      "Saler, poivrer, ajouter le jus de citron. Servir chaud avec coriandre fraiche.",
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
      { item: "milk", qty: 1, unit: "cup" },
      { item: "breadcrumbs", qty: 40, unit: "g" },
      { item: "mixed herbs", qty: 1, unit: "tbsp" },
      { item: "garlic cloves", qty: 4, unit: "pcs" },
      { item: "olive oil", qty: 1, unit: "tbsp" },
    ],
    steps: [
      "Preheat oven to 180°C (350°F).",
      "Cut off the tops of the vegetables and scoop out the insides.",
      "Blend the vegetable flesh and mix it with the ground meat, egg, milk, breadcrumbs, garlic, onion, herbs, salt, and pepper.",
      "Stuff the vegetables with the filling and place them in a baking dish.",
      "Drizzle with olive oil and bake for 40 minutes.",
    ],
    steps_fr: [
      "Prechauffer le four a 180°C (350°F).",
      "Couper les chapeaux des legumes et vider l'interieur.",
      "Mixer la chair des legumes et la melanger avec la viande hachee, l'oeuf, le lait, la chapelure, l'ail, l'oignon, les herbes, le sel et le poivre.",
      "Farcir les legumes et les disposer dans un plat.",
      "Arroser d'huile d'olive et enfourner 40 minutes.",
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
      { item: "black pepper", qty: 1, unit: "pinch" },
      { item: "tomato pulp", qty: 5, unit: "tbsp" },
      { item: "capsicum", qty: 1, unit: "pcs" },
      { item: "red kidney beans", qty: 1, unit: "can" },
      { item: "black beans", qty: 1, unit: "can" },
    ],
    steps: [
      "Place 1 large red onion (halved) and 2 peeled garlic cloves (or 2 small onions) into the Thermomix bowl.",
      "Close the lid with measuring cup and mix 4 sec / speed 5.",
      "Scrape down the sides of the bowl with the spatula.",
      "Add 15 g olive oil to the Thermomix bowl.",
      "Close the lid with measuring cup and cook 3 min / 100C / speed 2.",
      "Add 500 g minced beef, breaking it into pieces with your hands.",
      "Close the lid with measuring cup and cook 3 min / 100C / spoon speed.",
      "Add 1/8 tsp chili powder, 2 tsp cumin, 1/2 tsp oregano, and a pinch of black pepper to the bowl.",
      "Add 5 tbsp tomato pulp (or 2 small cans of Mutti) and 1 chopped bell pepper.",
      "Place the Varoma on top (instead of the measuring cup) to avoid splashes. Cook 15 min / 120C / spoon speed.",
      "Drain 1 can of red kidney beans and 1 can of black beans, then add them to the bowl.",
      "Place the Varoma on top again and cook 10 min / 120C / spoon speed.",
    ],
    steps_fr: [
      "Place 1 gros oignon rouge (coupe en deux) et 2 gousses d'ail epluchees (ou 2 petits oignons) dans le bol du Thermomix.",
      "Fermer le couvercle avec le gobelet doseur et melanger 4 sec / vitesse 5.",
      "Racler les parois du bol avec la spatule.",
      "Ajouter 15 g d'huile d'olive dans le bol du Thermomix.",
      "Fermer le couvercle avec le gobelet doseur et cuire 3 min / 100C / vitesse 2.",
      "Ajouter 500 g de boeuf hache, en le separant avec les mains.",
      "Fermer le couvercle avec le gobelet doseur et cuire 3 min / 100C / vitesse cuillere.",
      "Ajouter 1/8 c. a cafe de chili en poudre, 2 c. a cafe de cumin, 1/2 c. a cafe d'origan, et une pincee de poivre noir.",
      "Ajouter 5 c. a soupe de pulpe de tomate (ou 2 petites boites de Mutti) et 1 poivron coupe.",
      "Placer le Varoma sur le dessus (a la place du gobelet doseur) pour eviter les projections. Cuire 15 min / 120C / vitesse cuillere.",
      "Egoutter 1 boite de haricots rouges et 1 boite de haricots noirs, puis les ajouter au bol.",
      "Placer a nouveau le Varoma sur le dessus et cuire 10 min / 120C / vitesse cuillere.",
    ],
  },
  {
    id: "ratatouille-thermomix",
    name: "Ratatouille",
    name_fr: "Ratatouille (Thermomix)",
    time: "50 min",
    servings: 6,
    tags: ["thermomix", "vegetarian", "batch"],
    ingredients: [
      { item: "white onion", qty: 3, unit: "pcs" },
      { item: "garlic cloves", qty: 3, unit: "pcs" },
      { item: "olive oil", qty: 50, unit: "g" },
      { item: "tomatoes", qty: 3, unit: "pcs" },
      { item: "capsicum", qty: 3, unit: "pcs" },
      { item: "mixed herbs", qty: 1.5, unit: "tbsp" },
      { item: "eggplant", qty: 2, unit: "pcs" },
      { item: "zucchini", qty: 3, unit: "pcs" },
    ],
    steps: [
      "Turn on the Thermomix.",
      "Select \"Menu\".",
      "Select \"Recently cooked\".",
      "Select \"Ratatouille\".",
      "Press \"Start\" and follow the on-screen instructions.",
      "If the machine offers \"Resume\" or \"Restart from beginning\", click \"Restart\".",
      "DO NOT add salt or pepper, even if the recipe suggests it.",
      "At the final step, add 10 extra minutes of cooking time.",
    ],
    steps_fr: [
      "Allumer le Thermomix.",
      "Selectionner \"Menu\".",
      "Selectionner \"Recently cooked\".",
      "Selectionner \"Ratatouille\".",
      "Appuyer sur \"Start\" et suivre les instructions a l'ecran.",
      "Si la machine propose \"Resume\" ou \"Restart from beginning\", cliquer \"Restart\".",
      "NE PAS ajouter de sel ou de poivre, meme si la recette le suggere.",
      "A la derniere etape, ajouter 10 minutes de cuisson supplementaires.",
    ],
  },
  {
    id: "split-pea-soup-thermomix",
    name: "Split Pea Soup (Thermomix)",
    name_fr: "Soupe de pois casses au Thermomix",
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
      { item: "salt", qty: 1, unit: "pinch" },
      { item: "black pepper", qty: 1, unit: "pinch" },
      { item: "creme fraiche", qty: 1, unit: "tsp" },
    ],
    steps: [
      "Place the onion cut in half, the carrot cut into pieces and the garlic cloves in the Thermomix bowl.",
      "Add the lid with the measuring cup.",
      "Mix 5 sec/speed 5.",
      "Scrape down the sides of the bowl with the spatula.",
      "Add the olive oil to the Thermomix bowl.",
      "Add the lid with the measuring cup.",
      "Saute 5 min/120C/speed 1.",
      "Add 200 g split peas, the small spoon of vegetable stock and 900 g water to the Thermomix bowl.",
      "Add the lid with the measuring cup.",
      "Cook 45 min/100C/speed 2.",
      "Add salt, pepper and the small spoon of creme fraiche to the Thermomix bowl.",
      "Add the lid with the measuring cup.",
      "Mix 1 min/speed 5. Increase speed progressively up to 10.",
    ],
    steps_fr: [
      "Mettre l'oignon coupe en deux, le(s) carotte(s) coupee(s) en morceaux et les gousses d'ail dans le bol du Thermomix.",
      "Ajoutez le couvercle avec le gobelet doseur.",
      "Melanger 5 sec/vitesse 5.",
      "Racler les parois du bol avec la spatule.",
      "Ajouter l'huile d'olive dans le bol du Thermomix.",
      "Ajoutez le couvercle avec le gobelet doseur.",
      "Rissoler 5 min/120C/vitesse 1.",
      "Ajouter 200 grammes de pois casses, la petite cuillere de bouillon et 900g d'eau dans le bol du Thermomix.",
      "Ajoutez le couvercle avec le gobelet doseur.",
      "Cuire 45 min/100C/vitesse 2.",
      "Ajouter sel, poivre et la petite cuillere de creme fraiche dans le bol du Thermomix.",
      "Ajoutez le couvercle avec le gobelet doseur.",
      "Melanger 1 min/vitesse 5. Augmentez progressivement la vitesse jusqu'a 10.",
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
      { item: "creme fraiche", qty: 2, unit: "tbsp" },
      { item: "olive oil", qty: 1, unit: "tbsp" },
      { item: "rice", qty: 40, unit: "g" },
    ],
    steps: [
      "Wash the zucchinis.",
      "Cut zucchinis and onions finely.",
      "Saute the onions in a pan with a little olive oil for 5 min.",
      "Add the zucchinis, a little olive oil and saute until cooked, lightly grilled and soft.",
      "During the vegetable cooking, cut the chicken into small pieces.",
      "Grill the chicken on high heat in another pan then continue cooking over medium heat.",
      "When the chicken and vegetables are cooked, add the chicken to the vegetable pan, add the creme fraiche, mix and simmer on low heat for 2 minutes.",
    ],
    steps_fr: [
      "Laver les courgettes.",
      "Couper courgettes et oignons finement.",
      "Faire revenir les oignons a la poele avec un peu d'huile d'olive pendant 5 min.",
      "Ajouter les courgettes, un peu d'huile d'olive et faire revenir le tout jusqu'a ce que ce soit cuit, legerement grille et fondant.",
      "Pendant la cuisson des legumes, couper le poulet en petits morceaux.",
      "Griller le poulet a feu vif dans une autre poele puis poursuivre la cuisson a feu moyen.",
      "Lorsque le poulet et les legumes sont cuits, ajouter le poulet a la poelee de legumes, ajouter la creme fraiche, melanger et faire revenir le tout a feu doux pendant 2 minutes.",
    ],
  },
  {
    id: "vegan-bean-stew-fennel",
    name: "Vegan Bean Stew with Fennel",
    name_fr: "Ragout vegan de haricots au fenouil",
    time: "75 min",
    servings: 6,
    tags: ["pan", "batch", "vegetarian"],
    ingredients: [
      { item: "brown onion", qty: 1, unit: "pcs" },
      { item: "garlic cloves", qty: 4, unit: "pcs" },
      { item: "red capsicum", qty: 2, unit: "pcs" },
      { item: "fennel bulb", qty: 0.5, unit: "pcs" },
      { item: "fennel bulb (optional)", qty: 1.5, unit: "pcs" },
      { item: "cumin", qty: 0.5, unit: "tsp" },
      { item: "smoked paprika", qty: 3, unit: "tsp" },
      { item: "fennel seeds", qty: 0.5, unit: "tsp" },
      { item: "chilli flakes", qty: 0.25, unit: "tsp" },
      { item: "saffron (optional)", qty: 1, unit: "pinch" },
      { item: "olive oil", qty: 2, unit: "tbsp" },
      { item: "canned tomatoes", qty: 2, unit: "cans" },
      { item: "water or stock", qty: 1, unit: "can" },
      { item: "dried thyme", qty: 1, unit: "tsp" },
      { item: "salt", qty: 0.5, unit: "tsp" },
      { item: "black pepper", qty: 1, unit: "pinch" },
      { item: "cannellini beans", qty: 2, unit: "cans" },
      { item: "green olives (optional)", qty: 12, unit: "pcs" },
      { item: "pepitas (optional)", qty: 0.25, unit: "cup" },
      { item: "lemon juice (optional)", qty: 1, unit: "tsp" },
      { item: "sugar or date syrup (optional)", qty: 1, unit: "tsp" },
    ],
    steps: [
      "Optional: Roast the fennel & extra capsicum (do this first): Preheat oven to 200°C. Slice 1 capsicum into large pieces and cut remaining fennel into wedges. Toss with olive oil, salt, pepper. Roast 25 minutes, turning once, until soft and lightly charred. Set aside to add at the end.",
      "Start the stew base: Heat 2 Tbsp olive oil in a large pot over medium heat.",
      "Cook onion: Add diced onion, cook 7 minutes until soft.",
      "Add garlic: Add garlic and cook 5 minutes more.",
      "Add fresh capsicum + fennel: Add the second (raw) diced capsicum and 1/2 diced fennel bulb. Cook 3–5 minutes.",
      "Add spices: Stir in 1/2 tsp cumin, 3 tsp smoked paprika, 1/2 tsp ground fennel seed, 1/4 tsp chili flakes and a pinch of saffron (optional). Cook 1–2 minutes.",
      "Add tomatoes + liquid: Add 2 cans chopped tomatoes and 1 can of water or stock. Add 1 tsp dried thyme + 1/2 tsp salt.",
      "Simmer: Cover and cook 15 minutes. Then uncover and simmer 20–30 minutes, stirring occasionally, until thickened.",
      "Toast pepitas: Heat 1 tsp oil in a small pan. Add pepitas and toast until they pop. Salt lightly.",
      "Taste & balance: If tangy → add 1 tsp sugar or date syrup. If sweet → add lemon juice. Adjust salt + black pepper.",
      "Finish: Stir in the cannellini beans to warm through. Add roasted capsicum and roasted fennel (if using). Add olives if desired.",
      "Serve: Top with toasted pepitas. Serve with rice, quinoa, couscous, or crusty bread.",
    ],
    steps_fr: [
      "Optionnel : Rôtir le fenouil et le poivron (a faire en premier) : Prechauffer le four a 200°C. Couper 1 poivron en gros morceaux et le reste du fenouil en quartiers. Melanger avec huile d'olive, sel, poivre. Rôtir 25 minutes en retournant une fois, jusqu'a tendres et legerement grilles. Reserver pour la fin.",
      "Commencer la base du ragout : Chauffer 2 c. a soupe d'huile d'olive dans une grande casserole a feu moyen.",
      "Cuire l'oignon : Ajouter l'oignon emince, cuire 7 minutes jusqu'a tendre.",
      "Ajouter l'ail : Ajouter l'ail et cuire 5 minutes de plus.",
      "Ajouter poivron frais + fenouil : Ajouter le second poivron cru en des et 1/2 bulbe de fenouil en des. Cuire 3–5 minutes.",
      "Ajouter les epices : Incorporer 1/2 c. a cafe de cumin, 3 c. a cafe de paprika fume, 1/2 c. a cafe de graines de fenouil moulues, 1/4 c. a cafe de flocons de piment et une pincee de safran (optionnel). Cuire 1–2 minutes.",
      "Ajouter tomates + liquide : Ajouter 2 boites de tomates concassees et 1 boite d'eau ou de bouillon. Ajouter 1 c. a cafe de thym sec + 1/2 c. a cafe de sel.",
      "Mijoter : Couvrir et cuire 15 minutes. Decouvrir et laisser mijoter 20–30 minutes en remuant de temps en temps, jusqu'a epaississement.",
      "Griller les pepitas : Chauffer 1 c. a cafe d'huile dans une petite poele. Ajouter les pepitas et griller jusqu'a ce qu'elles eclatent. Saler legerement.",
      "Gouter et equilibrer : Si c'est trop acide → ajouter 1 c. a cafe de sucre ou de sirop de datte. Si c'est trop sucre → ajouter du jus de citron. Ajuster sel + poivre.",
      "Finir : Incorporer les haricots cannellini pour les rechauffer. Ajouter le poivron et le fenouil rôtis (si utilises). Ajouter les olives si desire.",
      "Servir : Parsemer de pepitas grillees. Servir avec riz, quinoa, couscous ou pain croustillant.",
    ],
  },
  {
    id: "dahl-lentilles-epinards",
    name: "Lentil Dahl with Spinach and Spices",
    name_fr: "Dahl de lentilles aux epinards et epices",
    time: "40 min",
    servings: 5,
    tags: ["pan", "vegetarian", "batch"],
    ingredients: [
      { item: "green lentils", qty: 250, unit: "g" },
      { item: "coconut milk", qty: 400, unit: "ml" },
      { item: "hot water", qty: 500, unit: "ml" },
      { item: "fresh spinach", qty: 130, unit: "g" },
      { item: "carrot", qty: 1, unit: "pcs" },
      { item: "red onion", qty: 1, unit: "pcs" },
      { item: "garlic cloves", qty: 2, unit: "pcs" },
      { item: "turmeric", qty: 15, unit: "g" },
      { item: "curry powder", qty: 1, unit: "tbsp" },
      { item: "lime", qty: 1, unit: "pcs" },
      { item: "olive oil", qty: 1, unit: "tbsp" },
      { item: "rice", qty: 40, unit: "g" },
    ],
    steps: [
      "Start by soaking the lentils in water for 15 minutes, then drain them.",
      "Peel the onion, garlic and carrot. Dice the onion and garlic and cut the carrot into small cubes. In a saucepan, brown everything with a drizzle of olive oil (about 5 minutes).",
      "In the saucepan, add the lentils, coconut milk, hot water, turmeric and curry. Mix and cover the pan with a lid. Simmer for 35 minutes over low heat, stirring regularly. If it sticks, add a little hot water.",
      "Meanwhile, wash the spinach. After 25 minutes of cooking, add the spinach to the saucepan and stir regularly.",
    ],
    steps_fr: [
      "Commencez par faire tremper les lentilles dans de l'eau pendant 15 minutes, puis egouttez-les.",
      "Epluchez l'oignon, l'ail et la carotte. Emincez l'oignon et l'ail et coupez la carotte en petits cubes. Dans une casserole, faites dorer le tout avec un filet d'huile d'olive (environ 5 minutes).",
      "Dans la casserole, ajoutez les lentilles corail, le lait de coco, l'eau chaude, le curcuma (turmeric) et le curry. Melangez et recouvrez la casserole avec un couvercle. Laissez mijoter pendant 35 minutes a feu doux et remuez regulierement. Si ca accroche, ajoutez un peu d'eau chaude.",
      "Pendant ce temps, lavez les epinards. Au bout de 25 minutes de cuisson, ajoutez-les dans la casserole et remuez regulierement.",
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
      { item: "salt", qty: 1, unit: "pinch" },
      { item: "black pepper", qty: 1, unit: "pinch" },
    ],
    steps: [
      "Preheat the oven to 180C.",
      "Wash and slice all the vegetables into thin slices.",
      "Layer them in a baking dish, seasoning with salt, pepper, dried thyme and olive oil.",
      "Bake for 45 minutes and serve in the dish.",
    ],
    steps_fr: [
      "Prechauffez le four a 180C.",
      "Lavez et taillez tous les legumes en lamelles fines.",
      "Superposez-les dans un plat a gratin, assaisonnant de sel, de poivre, de thym seche et d'huile d'olive.",
      "Enfournez 45 min et servez dans le plat.",
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
      { item: "water", qty: 50, unit: "g" },
      { item: "tomato pulp", qty: 400, unit: "g" },
      { item: "tomato paste", qty: 30, unit: "g" },
    ],
    steps: [
      "Place 120 g peeled carrots cut into small pieces in the Thermomix bowl.",
      "Add 160 g peeled onions cut into quarters in the Thermomix bowl.",
      "Add 2 peeled garlic cloves to the Thermomix bowl.",
      "Add the lid with the measuring cup.",
      "Mix 5 sec/speed 5.",
      "Scrape down the sides of the bowl with the spatula.",
      "Add 3 tablespoons of olive oil to the Thermomix bowl.",
      "Add the lid with the measuring cup.",
      "Cook 7 min/100C/spoon speed.",
      "Add 500 g minced beef to the Thermomix bowl.",
      "Add 50 g water to the Thermomix bowl.",
      "Add 1 teaspoon of herbes de provence to the Thermomix bowl.",
      "Add the lid with the measuring cup.",
      "Heat 15 min/80C/spoon speed.",
      "Add 400 g tomato pulp to the Thermomix bowl.",
      "Add 30 g tomato paste to the Thermomix bowl.",
      "Add the lid with the measuring cup.",
      "Cook 20 min/90C/speed 1.",
    ],
    steps_fr: [
      "Mettre 120 grammes de carottes epluchees et coupees en petits morceaux dans le bol du Thermomix.",
      "Ajouter 160 grammes d'oignons epluches et coupes en quatre dans le bol du Thermomix.",
      "Ajouter 2 gousses d'ail epluchees dans le bol du Thermomix.",
      "Ajoutez le couvercle avec le gobelet doseur.",
      "Melanger 5 sec/vitesse 5.",
      "Racler les parois du bol avec la spatule.",
      "Ajouter 3 cuilleres a soupe d'huile d'olive dans le bol du Thermomix.",
      "Ajoutez le couvercle avec le gobelet doseur.",
      "Cuire 7 min/100C/Vitesse Cuillere.",
      "Ajouter 500 grammes de boeuf hache dans le bol du Thermomix.",
      "Ajouter 50 grammes d'eau dans le bol du Thermomix.",
      "Ajouter 1 cuillere a cafe d'herbes de provence dans le bol du Thermomix.",
      "Ajoutez le couvercle avec le gobelet doseur.",
      "Chauffer 15 min/80C/Vitesse Cuillere.",
      "Ajouter 400 grammes de coulis de tomates dans le bol du Thermomix.",
      "Ajouter 30 grammes de concentre de tomates dans le bol du Thermomix.",
      "Ajoutez le couvercle avec le gobelet doseur.",
      "Cuire 20 min/90C/vitesse 1.",
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
      { item: "thyme", qty: 4, unit: "tbsp" },
      { item: "olive oil", qty: 4, unit: "tbsp" },
      { item: "ground cumin", qty: 1, unit: "tsp" },
      { item: "plant-based cream", qty: 150, unit: "ml" },
    ],
    steps: [
      "Preheat the oven to 180°C.",
      "Wash the cauliflower and cut into florets. Blanch for 10 minutes in boiling water.",
      "Crush the almonds with a rolling pin.",
      "In a greased gratin dish, place the cauliflower florets.",
      "Cover with crushed almonds, grated cheese, thyme, olive oil, plant-based cream, and cumin. Season with salt and pepper.",
      "Bake for 15 minutes.",
    ],
    steps_fr: [
      "Prechauffez le four a 180°C.",
      "Lavez le chou-fleur et taillez-le en bouquets. Plongez ses fleurettes 10 minutes dans de l'eau bouillante.",
      "Concasez les amandes a l'aide d'un rouleau a patisserie.",
      "Dans un plat a gratin graisse, placez les tetes de chou-fleur.",
      "Recouvrez-les d'amandes concassees, de fromage rape, de thym, d'huile, de preparation cremeuse et de cumin. Salez et poivrez.",
      "Enfournez pour 15 minutes.",
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
    ],
    steps: [
      "Preheat oven to 180°C (350°F).",
      "Heat olive oil in a pan, cook onion and garlic.",
      "Add beef, cinnamon, and cumin.",
      "Add tomatoes, water, salt, and pepper. Simmer for 15 minutes.",
      "Grill eggplant slices in the oven at 200°C (400°F) for 10 minutes per side.",
      "Prepare bechamel: Melt butter, whisk in flour, then gradually add milk. Stir until thickened, then add nutmeg.",
      "In a baking dish, layer eggplants, meat sauce, and bechamel. Repeat layers and finish with bechamel on top.",
      "Bake for 30 minutes. Serve warm.",
    ],
    steps_fr: [
      "Prechauffer le four a 180°C (350°F).",
      "Faire chauffer l'huile d'olive dans une poele, cuire l'oignon et l'ail.",
      "Ajouter le boeuf, la cannelle et le cumin.",
      "Ajouter tomates, eau, sel et poivre. Laisser mijoter 15 minutes.",
      "Griller les tranches d'aubergine au four a 200°C (400°F) pendant 10 minutes par cote.",
      "Preparer la bechamel : faire fondre le beurre, incorporer la farine, puis ajouter le lait progressivement. Remuer jusqu'a epaississement, puis ajouter la muscade.",
      "Dans un plat, alterner aubergines, sauce viande et bechamel. Recommencer et terminer par la bechamel.",
      "Cuire 30 minutes. Servir chaud.",
    ],
  },
  {
    id: "chickpeas-swiss-chard",
    name: "Chickpeas, spinach, yogurt (Ottolenghi)",
    name_fr: "Pois chiches, epinards, yaourt (Ottolenghi)",
    time: "30 min",
    servings: 4,
    tags: ["pan", "vegetarian", "batch"],
    ingredients: [
      { item: "carrot", qty: 6, unit: "pcs" },
      { item: "olive oil", qty: 90, unit: "ml" },
      { item: "brown onion", qty: 3, unit: "pcs" },
      { item: "ground cumin", qty: 3, unit: "tsp" },
      { item: "fresh spinach", qty: 400, unit: "g" },
      { item: "canned chickpeas", qty: 2, unit: "cans" },
      { item: "lemon", qty: 1, unit: "pcs" },
      { item: "black pepper", qty: 1, unit: "pinch" },
    ],
    steps: [
      "Preheat the oven to 200°C fan.",
      "Mix the carrots with 2 tablespoon of oil and a grind of pepper. Spread out on a parchment-lined baking tray and roast for 20 minutes: they should still be a little crunchy.",
      "Place the remaining 4 tablespoons of oil in a large frying pan, on a medium heat, and add the onion and cumin. Fry for 10 minutes, stirring occasionally, until golden-brown.",
      "Add the spinach, cooked carrots, chickpeas, 75ml of water and a good grind of pepper, and mix through. Cook for 5 minutes, until the spinach leaves are soft and hardly any juice is left in the pan.",
      "Remove from the heat, stir through the lemon juice, and serve.",
    ],
    steps_fr: [
      "Prechauffer le four a 200°C chaleur tournante.",
      "Melanger les carottes avec 2 c. a soupe d'huile et un tour de poivre. Etaler sur une plaque chemisee et rôtir 20 minutes : elles doivent rester legerement croquantes.",
      "Mettre les 4 c. a soupe d'huile restantes dans une grande poele a feu moyen, ajouter l'oignon et le cumin. Faire revenir 10 minutes en remuant de temps en temps, jusqu'a coloration.",
      "Ajouter les epinards, les carottes cuites, les pois chiches, 75 ml d'eau et un bon tour de poivre, puis melanger. Cuire 5 minutes, jusqu'a ce que les epinards soient tendres et qu'il ne reste presque plus de jus.",
      "Retirer du feu, ajouter le jus de citron et servir.",
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
      { item: "nutmeg", qty: 1, unit: "pinch" },
      { item: "lasagne sheets", qty: 8, unit: "sheets" },
    ],
    steps: [
      "Peel and finely chop the onion, garlic, and carrots. Cut courgettes and capsicum into small pieces.",
      "Heat olive oil in a large pan. Add onion and garlic. Cook 3 min on medium heat. Add carrots, courgettes, and capsicum. Cook 5 more min.",
      "Add lentils, crushed tomatoes, tomato paste, herbs, and 300 ml of water. Bring to a boil, then cover and simmer 20-25 min until lentils are tender and sauce is reduced.",
      "Make the béchamel: melt butter in a saucepan, stir in flour, then gradually whisk in milk. Cook 5-7 min until thickened. Add nutmeg.",
      "Preheat oven to 180°C. In a baking dish, layer lentil sauce, lasagna sheets, béchamel. Repeat for 2-3 layers. Finish with béchamel on top.",
      "Bake 30-35 min at 180°C. Let rest 10 min before serving.",
    ],
    steps_fr: [
      "Peler et hacher finement l'oignon, l'ail et les carottes. Couper courgettes et poivron en petits pieces.",
      "Faire chauffer l'huile d'olive dans une grande poele. Ajouter oignon et ail. Cuire 3 min a feu moyen. Ajouter carottes, courgettes et poivron. Cuire 5 min de plus.",
      "Ajouter lentilles, tomates concassees, concentre de tomate, herbes, et 300 ml d'eau. Porter a ebullition, puis couvrir et mijoter 20-25 min jusqu'a ce que les lentilles soient tendres et la sauce reduite.",
      "Faire la bechamel : faire fondre le beurre dans une casserole, incorporer la farine, puis ajouter le lait progressivement en fouettant. Cuire 5-7 min jusqu'a epaississement. Ajouter la muscade.",
      "Prechauffer le four a 180°C. Dans un plat, alterner sauce aux lentilles, feuilles de lasagne et bechamel. Recommencer pour 2-3 couches. Terminer par la bechamel.",
      "Cuire 30-35 min a 180°C. Laisser reposer 10 min avant de servir.",
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
      { item: "salt", qty: 1, unit: "pinch" },
      { item: "black pepper", qty: 1, unit: "pinch" },
      { item: "nutmeg", qty: 1, unit: "pinch" },
      { item: "lasagne sheets", qty: 375, unit: "g" },
      { item: "basil", qty: 1, unit: "bunch" },
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
      "Clean spinach and remove as much water as possible. Finely chop and combine in a large bowl with ricotta, garlic, egg and 1/2 of the parmesan to form a smooth, spreadable paste. Season with salt, if necessary, pepper and nutmeg.",
      "To make bechamel sauce, melt butter in a small saucepan over a medium-high heat. Stir in flour and cook, stirring, for 1-2 minutes. Remove from heat and slowly add milk, whisking until combined. Return to heat and cook, stirring, for 4 minutes or until mixture thickens. Season with salt and pepper.",
      "To make tomato sauce, heat oil in a large frying pan over a medium-high heat. Add eschalot and cook for 1-2 minutes. Add tomato and dried herbs, then reduce heat and simmer for 4-5 minutes. Season with salt and pepper.",
      "Preheat oven to 200C. To assemble dish, spread a little of the tomato sauce over base of a 30 x 25cm baking dish. Lay 1/3 of the lasagne sheets over sauce, top with 1/2 of the spinach mixture and drizzle with 1/3 of the bechamel sauce. Repeat with 1/3 of the lasagne sheets, remaining spinach mixture and 1/3 of the bechamel. Top with remaining lasagne sheets, remaining tomato sauce and remaining bechamel. Sprinkle over remaining parmesan and bake for 45 minutes or until golden brown.",
    ],
    steps_fr: [
      "Nettoyez les epinards et enlevez un maximum d'eau. Hachez finement et melangez dans un grand bol avec la ricotta, l'ail, l'oeuf et 1/2 du parmesan pour obtenir une pate lisse et tartinable. Assaisonnez avec du sel si necessaire, du poivre et de la muscade.",
      "Pour faire la sauce bechamel, faites fondre le beurre dans une petite casserole a feu moyen-vif. Incorporez la farine et cuisez en remuant pendant 1-2 minutes. Retirez du feu et ajoutez lentement le lait en fouettant jusqu'a obtention d'un melange homogene. Remettez sur le feu et faites cuire en remuant pendant 4 minutes ou jusqu'a ce que le melange epaississe. Assaisonnez avec du sel et du poivre.",
      "Pour faire la sauce tomate, faites chauffer l'huile dans une grande poele a feu moyen-vif. Ajoutez l'echalote et faites cuire 1-2 minutes. Ajoutez la tomate et les herbes sechees, puis baissez le feu et laissez mijoter 4-5 minutes. Assaisonnez avec du sel et du poivre.",
      "Prechauffez le four a 200C. Pour assembler le plat, etalez un peu de sauce tomate au fond d'un plat de 30 x 25cm. Deposez 1/3 des feuilles de lasagne sur la sauce, ajoutez 1/2 de la preparation aux epinards et nappez de 1/3 de la bechamel. Repetez avec 1/3 des feuilles de lasagne, le reste de la preparation aux epinards et 1/3 de la bechamel. Terminez avec le reste des feuilles de lasagne, le reste de la sauce tomate et le reste de la bechamel. Parsemez le reste du parmesan et enfournez 45 minutes ou jusqu'a ce que ce soit dore.",
    ],
  },
  {
    id: "quiche-courgettes-poivrons-onions",
    name: "Capsicum & Zucchini Quiche",
    name_fr: "Quiche aux poivrons et a la courgette",
    time: "55 min",
    servings: 4,
    tags: ["oven", "batch", "vegetarian", "thermomix"],
    ingredients: [
      { item: "gruyere", qty: 40, unit: "g" },
      { item: "goat cheese", qty: 200, unit: "g" },
      { item: "black pepper", qty: 1, unit: "pinch" },
      { item: "salt", qty: 1, unit: "pinch" },
      { item: "capsicum", qty: 4, unit: "pcs" },
      { item: "zucchini", qty: 4, unit: "pcs" },
      { item: "brown onion", qty: 2, unit: "pcs" },
      { item: "eggs", qty: 6, unit: "pcs" },
      { item: "creme fraiche", qty: 300, unit: "ml" },
      { item: "plain flour", qty: 225, unit: "g" },
      { item: "salt", qty: 1, unit: "tsp" },
      { item: "butter", qty: 90, unit: "g" },
      { item: "water", qty: 75, unit: "g" },
    ],
    steps: [
      "Place 225 g flour, 1 tsp salt, 90 g butter in pieces and 75 g water in the Thermomix bowl.",
      "Add the lid with the measuring cup. Mix 1 min / kneading speed (Dough mode).",
      "Remove the dough from the Thermomix and form a ball.",
      "Refrigerate 15 min.",
      "Roll out the dough with a rolling pin to make a thin crust.",
      "Roll out the dough on baking paper then place the paper in the dish.",
      "Preheat your oven to 220C.",
      "Cut zucchini and capsicum into small pieces.",
      "Put zucchini, capsicum and onions in a large pan with a little olive oil over medium heat. Saute until cooked and lightly grilled.",
      "In a bowl, crack and whisk the eggs, then add the liquid creme fraiche and grated gruyere. Mix well. Salt and pepper.",
      "Roll out the crust in a tart dish and arrange the vegetables evenly. Cover with the egg/cream mixture.",
      "Place the goat cheese on top in small pieces, spread evenly over the quiche.",
      "Bake at 220C for about 30 min.",
    ],
    steps_fr: [
      "Mettre 225 grammes de farine, 1 cuillere a cafe de sel, 90g de beurre coupes en morceaux et 75g d'eau dans le bol du Thermomix.",
      "Ajoutez le couvercle avec le gobelet doseur. Melanger 1 min/vitesse petrin (mode Petrin).",
      "Sortir la pate du thermomix et former une boule.",
      "Reserver au frigo 15min.",
      "Etaler la pate avec le rouleau a patisserie pour former une pate fine.",
      "Etaler la pate sur du papier sulfurise puis mettre le papier dans le plat.",
      "Prechauffer votre four a 220C (thermostat 7).",
      "Couper courgettes et poivrons en petits morceaux.",
      "Mettre courgettes, poivrons et oignons dans une grande poele avec un peu d'huile d'olive a feu moyen. Les faire revenir jusqu'a ce qu'ils soient cuits et un peu grilles.",
      "Dans un bol, casser et battre les oeufs, puis ajouter la creme liquide et le gruyere rape. Bien melanger le tout. Saler et poivrer.",
      "Etaler la pate dans un plat a tarte et disposer les legumes de facon homogene. Recouvrir avec le melange oeufs/creme.",
      "Disposer le chevre sur le dessus en petits morceaux, repartis de facon homogene sur la quiche.",
      "Enfourner a 220C pendant environ 30 min.",
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
      { item: "eggplant", qty: 4, unit: "pcs" },
      { item: "parmesan", qty: 170, unit: "g" },
      { item: "basil", qty: 2, unit: "cups" },
      { item: "mozzarella", qty: 150, unit: "g" },
      { item: "brown onion", qty: 1, unit: "pcs" },
      { item: "garlic cloves", qty: 5, unit: "pcs" },
      { item: "diced tomatoes", qty: 600, unit: "g" },
      { item: "olive oil", qty: 2, unit: "tbsp" },
      { item: "oregano", qty: 1, unit: "tsp" },
    ],
    steps: [
      "Baking eggplant: cut eggplant in thin slices.",
      "Preheat oven to 220C / 430F (200C fan).",
      "Bake eggplants with olive oil for 45 minutes until browning and tender. Remove from oven, leave to cool.",
      "Saute onions and garlic: Heat olive oil in a large skillet over medium-high heat. Saute onions and garlic for 3 minutes until softened and just about to colour on the edges.",
      "Add remaining ingredients: Pour in fry pan canned tomatoes and oregano. Stir and bring to a simmer.",
      "Simmer uncovered for about 15 minutes, stirring occasionally, until thickened, adding the basil stalks halfway through cooking.",
      "The final consistency should be slightly thicker than a pasta sauce so it's spreadable and not leaching liquid, but not too pasty either. Add extra water a little at a time if required during cooking if it gets too thick.",
      "Season: Stir in salt and pepper. (Remember, we get salt from the parmesan too, so no need to go overboard here)",
      "Assembling and baking:",
      "Reduce oven to 180C / 350F (160C fan).",
      "Smear a little tomato sauce in the bottom of baking dish.",
      "Layer 1: Lay one third of the eggplant so it covers the base (some overlap is OK when layering eggplant). Spread 1/3 of the remaining sugo over eggplant. Drizzle with a little olive oil. Sprinkle with 1/3 of the parmesan, and 1/3 of basil leaves.",
      "Layer 2: Repeat another 1/3 each of eggplant, tomato sauce, olive oil, basil and parmesan.",
      "Layer 3 (top layer): Repeat again with remaining eggplant, tomato sauce and some olive oil. Do not put basil on top layer (we will garnish after baking). Scatter with remaining parmesan, then all the mozzarella.",
      "Bake for 25 mins until bubbling and golden.",
    ],
    steps_fr: [
      "Cuire les aubergines: couper les aubergines en fines tranches.",
      "Prechauffer le four a 220C / 430F (200C fan).",
      "Cuire les aubergines avec l'huile d'olive pendant 45 minutes jusqu'a ce qu'elles soient dorees et tendres. Retirer du four et laisser refroidir.",
      "Faire revenir les oignons et l'ail: Chauffer l'huile d'olive dans une grande poele a feu moyen-vif. Faire revenir oignons et ail 3 minutes jusqu'a ce qu'ils soient tendres et commencent a colorer.",
      "Ajouter les ingredients restants: Verser dans la poele les tomates en conserve et l'origan. Remuer et porter a frémissement.",
      "Laisser mijoter a decouvert environ 15 minutes, en remuant de temps en temps, jusqu'a ce que la sauce epaississe, en ajoutant les tiges de basilic a mi-cuisson.",
      "La consistance finale doit etre legerement plus epaisse qu'une sauce pour pates afin qu'elle soit tartinable et ne rende pas d'eau, mais pas trop epaisse non plus. Ajouter un peu d'eau si necessaire pendant la cuisson si la sauce epaissit trop.",
      "Assaisonner: incorporer sel et poivre. (Rappelez-vous que le parmesan apporte deja du sel, donc pas besoin d'en mettre trop)",
      "Assemblage et cuisson:",
      "Baisser le four a 180C / 350F (160C fan).",
      "Etaler un peu de sauce tomate au fond du plat.",
      "Couche 1: Deposer un tiers des aubergines pour couvrir le fond (un leger chevauchement est OK). Etaler 1/3 du reste de la sauce sur les aubergines. Arroser d'un peu d'huile d'olive. Parsemer 1/3 du parmesan et 1/3 des feuilles de basilic.",
      "Couche 2: Repeter avec un autre tiers d'aubergines, sauce tomate, huile d'olive, basilic et parmesan.",
      "Couche 3 (couche du dessus): Repeter avec le reste des aubergines, sauce tomate et un peu d'huile d'olive. Ne pas mettre de basilic sur la couche du dessus (on garnira apres cuisson). Parsemer le reste du parmesan puis toute la mozzarella.",
      "Cuire 25 minutes jusqu'a ce que ce soit bouillonnant et dore.",
    ],
  },
];

const recipeImageMap = {
  "gratin-dauphinois": "https://d194ip2226q57d.cloudfront.net/images/GratinDauphinois.original.jpg",
  "chickpeas-swiss-chard": "https://static1.squarespace.com/static/56801b350e4c11744888ec37/t/602d95369cbd8f1dc15d2d7a/1613600058892/Chick+Pea+Swiss+Chard+landscape.jpg?format=1500w",
  "poulet-courgettes-creme": "https://littlesunnykitchen.com/wp-content/uploads/2025/08/Chicken-Zucchini-Pasta-1.jpg",
  "chilli-con-carne-thermomix": "https://www.parentclub.scot/sites/default/files/2025-02/chilli-con-carne-iStock-1353857212.jpg",
  "quiche-courgettes-poivrons-onions": "https://assets.tmecosys.com/image/upload/t_web_shared_recipe_221x240/img/recipe/ras/Assets/D4D985E0-2D3E-4F7D-B9A9-C2E38CA4CD3A/Derivates/5B707963-499E-43CA-9800-BB5CE0FC3CAD.jpg",
  "tian-de-legumes": "Recipes/vegetable-tian.jpg",
  "tabbouleh": "https://images.pexels.com/photos/15832880/pexels-photo-15832880.jpeg?cs=srgb&dl=pexels-esmihel-15832880.jpg&fm=jpg",
  "poulet-ananas-couscous": "https://skinnyfitalicious.com/wp-content/uploads/2018/12/pineapple-chicken-quinoa-img4.jpg",
  "ratatouille-thermomix": "https://lacuisinedegeraldine.fr/wp-content/uploads/2025/06/Ratatouille-333-500x500.jpg",
  "lentil-soup-thermomix": "https://hips.hearstapps.com/hmg-prod/images/lentil-soup-recipe-2-677c54158ad10.jpg?crop=0.6667718689179948xw:1xh;center,top&resize=1200:*",
  "split-pea-soup-thermomix": "https://www.allrecipes.com/thmb/VbJpto2PNNZNCemQU-Hk-1J0nZg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/219170-HamAndSplitPeaSoup-DDMFS-4x3-154b6d4968b14fa190ea733b66bbbc8e.jpg",
  "pea-mint-soup": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6V0K0v29CpPl1fivBUzW9hKu3XnLWolPj_w&s",
  "quinoa-butternut-cranberries": "https://foolproofliving.com/wp-content/uploads/2023/01/Butternut-Squash-Quinoa-Salad-with-Pomegranate.jpg",
  "fajitas": "https://www.foodiecrush.com/wp-content/uploads/2020/06/Chicken-Fajitas-foodiecrush.com-008.jpg",
  "bolognese-thermomix": "https://static01.nyt.com/images/2024/10/29/multimedia/Marcella-Hazans-Bolognese-Saucerex-wptg-sub/Marcella-Hazans-Bolognese-Saucerex-wptg-sub-videoSixteenByNineJumbo1600-v2.jpg",
  "eggplant-parmigiana": "https://www.recipetineats.com/tachyon/2021/05/Eggplant-Parmigiana_1-SQ.jpg",
  "spinach-ricotta-lasagne": "https://api.photon.aremedia.net.au/wp-content/uploads/sites/4/2015/03/19/e45f8cf903ef47ec94feb52dce841000/spinach-and-ricotta-lasagne.jpg?fit=2048%2C1536",
  "curry-epinards-pois-chiche": "https://mygoodnesskitchen.com/wp-content/uploads/2022/02/Chickpea-and-Spinach-Curry-Hero-1061.jpg.webp",
  "dahl-lentilles-epinards": "https://rainbowplantlife.com/wp-content/uploads/2024/05/Dal-Palak-hero-shots-3-of-4.jpg",
  "gratin-choufleur": "https://www.naomicrisante.com.au/wp-content/uploads/2019/05/134F22CC-1F9B-4399-A0CA-61A55733987D.jpeg",
  "legumes-farcis": "https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/stuffed_vegetables_56352_16x9.jpg.webp",
  "poulet-basquaise": "https://www.foodandwine.com/thmb/7_y1SLSmabv8G3X6-bjZkNFfgOE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Poulet-Basquaise-FT-RECIPE1023-1e5c2fc9a9324247bb91968a096066e3.jpg",
  "curry-poisson": "https://www.gimmesomeoven.com/wp-content/uploads/2025/04/Cod-Curry-6-1.jpg",
  "moussaka": "https://www.recipetineats.com/tachyon/2019/03/Greek-Moussaka_3-re-edited-SQ.jpg?resize=500%2C500",
  "lasagne-lentilles": "https://vancouverwithlove.com/wp-content/uploads/2025/03/vegan-red-lentil-lasagna.jpg",
  "harira-lentil-chickpea": "https://www.crowdedkitchen.com/wp-content/uploads/2020/08/moroccan-chickpea-lentil-stew.jpg",
  "lentils-brussels-skillet": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dmcczJg4HopMx2RMc-hfgz5zVwqUztU8Uw&s",
  "chicken-broccolini-mustard": "https://thefoodcharlatan.com/wp-content/uploads/2016/10/IMG_6395.jpg",
  "vegan-bean-stew-fennel": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQY6ikrhJtwXIntF8g9PGJu3BMvzZCWgW-g&s",
  "roasted-veg-cannellini": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZ-LLkszTKNyIGnEuZ4fl3UvVWNpZYlvNrw&s",
};

function getRecipeImage(recipe) {
  return recipeImageMap[recipe.id] || "";
}



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
const storedRatings = safeParseStorage("pantryRatingsByRecipe", {});
let selectedRecipesByWeek = { ...storedPicksByWeek };
let checkedItemsByWeek = { ...storedChecksByWeek };
let selectedServingsByWeek = { ...storedServingsByWeek };
let ratingsByRecipe = { ...storedRatings };
let selectedRecipes = [];
let checkedItems = {};
let currentWeekKey = "";
let cookWeekKey = "";
let currentLanguage = safeGetItem("pantryLanguage") || "en";
let selectedServings = {};
let currentCookRecipeId = "";
let lastAddedRecipeId = "";
let syncTimer = null;
let lastSyncedAt = safeGetItem("pantryLastSync") || "";
let syncCode = safeGetItem("pantrySyncCode") || "";

const SUPABASE_URL = "https://jscczxnmujsimeidltdt.supabase.co";
const SUPABASE_KEY = "sb_publishable_sg_e1rUxUxwQacU0le5D_Q_VYhYe980";
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

const pickList = document.getElementById("pick-list");
const recipeGrid = document.getElementById("recipe-grid");
const recipeDetails = document.getElementById("recipe-details");
const recipeModal = document.getElementById("recipe-modal");
const recipeModalBody = document.getElementById("recipe-modal-body");
const shoppingList = document.getElementById("shopping-list");
const cookSelect = document.getElementById("cook-select");
const cookCard = document.getElementById("cook-card");
const miniGrid = document.getElementById("mini-grid");
const weekLabel = document.getElementById("week-label");
const recentWeeks = document.getElementById("recent-weeks");
const cookWeekLabel = document.getElementById("cook-week-label");
const topWeekPicker = document.getElementById("top-week-picker");
const topWeekLabel = document.getElementById("top-week-label");
const topWeekShell = document.getElementById("top-week-shell");
const topWeekLabelBlock = document.getElementById("top-week-label");
const heroCount = document.getElementById("hero-count");
const recipeSearch = document.getElementById("recipe-search");
const filterUtensil = document.getElementById("filter-utensil");
const filterProtein = document.getElementById("filter-protein");
const filterMeal = document.getElementById("filter-meal");
const languageSelect = document.getElementById("language-select");
const syncCodeInput = document.getElementById("sync-code");
const syncConnect = document.getElementById("sync-connect");
const syncNow = document.getElementById("sync-now");
const syncStatus = document.getElementById("sync-status");

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
    planned_count: (count, weekLabel) =>
      `${count} recipe${count === 1 ? "" : "s"} planned for ${weekLabel}`,
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
    planned_count: (count, weekLabel) =>
      `${count} recette${count === 1 ? "" : "s"} planifiée${count === 1 ? "" : "s"} pour ${weekLabel}`,
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
  "creme fraiche": "crème fraîche",
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
  const key = item.toLowerCase();
  if (currentLanguage !== "fr") {
    if (key === "creme fraiche") return "cream";
    return item;
  }
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
const jumpLibrary = document.getElementById("jump-library");
const jumpPicker = document.getElementById("jump-picker");
const saveChanges = document.getElementById("save-changes");
const saveStatus = document.getElementById("save-status");
const exportPlan = document.getElementById("export-plan");
const importPlan = document.getElementById("import-plan");
const importFile = document.getElementById("import-file");
const plannerSection = document.getElementById("planner");
const cookSection = document.getElementById("cook");
const shoppingSection = document.getElementById("shopping");
const plannerLibrary = document.getElementById("planner-library");
const plannerPicker = document.getElementById("planner-picker");

function setView(view) {
  const isCook = view === "cook";
  document.body.classList.toggle("view-cook", isCook);
  document.body.classList.toggle("view-plan", !isCook);
  if (jumpPlanner) {
    jumpPlanner.classList.toggle("primary", !isCook);
    jumpPlanner.classList.toggle("ghost", isCook);
  }
  if (jumpCook) {
    jumpCook.classList.toggle("primary", isCook);
    jumpCook.classList.toggle("ghost", !isCook);
  }
}

if (jumpPlanner) {
  jumpPlanner.addEventListener("click", () => {
    setView("plan");
    if (plannerSection) {
      plannerSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (jumpCook) {
  jumpCook.addEventListener("click", () => {
    setView("cook");
    if (cookSection) {
      cookSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (jumpLibrary) {
  jumpLibrary.addEventListener("click", () => {
    if (plannerLibrary) {
      plannerLibrary.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (jumpPicker) {
  jumpPicker.addEventListener("click", () => {
    if (plannerPicker) {
      plannerPicker.scrollIntoView({ behavior: "smooth" });
    }
  });
}

setView("plan");
updateSaveStatus();
updateSyncStatus();
if (syncCode) {
  pullPlan();
}

if (saveChanges) {
  saveChanges.addEventListener("click", () => {
    saveState();
  });
}

if (syncCodeInput) {
  syncCodeInput.value = syncCode;
}

if (syncConnect) {
  syncConnect.addEventListener("click", async () => {
    const value = (syncCodeInput?.value || "").trim();
    if (!value) {
      updateSyncStatus("Enter a household code.");
      return;
    }
    syncCode = value;
    safeSetItem("pantrySyncCode", syncCode);
    updateSyncStatus("Connecting...");
    await pullPlan();
    scheduleSync();
  });
}

if (syncNow) {
  syncNow.addEventListener("click", () => {
    pushPlan();
  });
}

if (exportPlan) {
  exportPlan.addEventListener("click", () => {
    const payload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      picksByWeek: selectedRecipesByWeek,
      checksByWeek: checkedItemsByWeek,
      servingsByWeek: selectedServingsByWeek,
      ratingsByRecipe: ratingsByRecipe,
      language: currentLanguage,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pantrypilot-plan.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}

if (importPlan && importFile) {
  importPlan.addEventListener("click", () => {
    importFile.click();
  });
}

if (importFile) {
  importFile.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      selectedRecipesByWeek = { ...(data.picksByWeek || {}) };
      checkedItemsByWeek = { ...(data.checksByWeek || {}) };
      selectedServingsByWeek = { ...(data.servingsByWeek || {}) };
      ratingsByRecipe = { ...(data.ratingsByRecipe || {}) };
      currentLanguage = data.language || currentLanguage;

      safeSetItem("pantryPicksByWeek", JSON.stringify(selectedRecipesByWeek));
      safeSetItem("pantryChecksByWeek", JSON.stringify(checkedItemsByWeek));
      safeSetItem("pantryServingsByWeek", JSON.stringify(selectedServingsByWeek));
      safeSetItem("pantryRatingsByRecipe", JSON.stringify(ratingsByRecipe));
      safeSetItem("pantryLanguage", currentLanguage);

      if (languageSelect) languageSelect.value = currentLanguage;
      setWeekFromTopPicker();
      refreshAll();
      updateSaveStatus();
    } catch (error) {
      alert("Import failed. Please use a valid PantryPilot export file.");
    } finally {
      importFile.value = "";
    }
  });
}

function saveState() {
  selectedRecipesByWeek[currentWeekKey] = [...selectedRecipes];
  checkedItemsByWeek[currentWeekKey] = { ...checkedItems };
  selectedServingsByWeek[currentWeekKey] = { ...selectedServings };
  safeSetItem("pantryPicksByWeek", JSON.stringify(selectedRecipesByWeek));
  safeSetItem("pantryChecksByWeek", JSON.stringify(checkedItemsByWeek));
  safeSetItem("pantryServingsByWeek", JSON.stringify(selectedServingsByWeek));
  safeSetItem("pantryRatingsByRecipe", JSON.stringify(ratingsByRecipe));
  updateSaveStatus();
  scheduleSync();
}

function updateSaveStatus() {
  if (!saveStatus) return;
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  saveStatus.textContent = `Saved locally at ${time}.`;
}

function updateSyncStatus(message) {
  if (!syncStatus) return;
  syncStatus.textContent = message || (syncCode ? "Sync on." : "Sync off.");
}

function getPlanPayload() {
  return {
    picksByWeek: selectedRecipesByWeek,
    checksByWeek: checkedItemsByWeek,
    servingsByWeek: selectedServingsByWeek,
    ratingsByRecipe: ratingsByRecipe,
    language: currentLanguage,
    updatedAt: new Date().toISOString(),
  };
}

function applyPlanPayload(payload) {
  selectedRecipesByWeek = { ...(payload.picksByWeek || {}) };
  checkedItemsByWeek = { ...(payload.checksByWeek || {}) };
  selectedServingsByWeek = { ...(payload.servingsByWeek || {}) };
  ratingsByRecipe = { ...(payload.ratingsByRecipe || {}) };
  currentLanguage = payload.language || currentLanguage;
  lastSyncedAt = payload.updatedAt || lastSyncedAt;
  safeSetItem("pantryPicksByWeek", JSON.stringify(selectedRecipesByWeek));
  safeSetItem("pantryChecksByWeek", JSON.stringify(checkedItemsByWeek));
  safeSetItem("pantryServingsByWeek", JSON.stringify(selectedServingsByWeek));
  safeSetItem("pantryRatingsByRecipe", JSON.stringify(ratingsByRecipe));
  safeSetItem("pantryLanguage", currentLanguage);
  if (lastSyncedAt) safeSetItem("pantryLastSync", lastSyncedAt);
  if (languageSelect) languageSelect.value = currentLanguage;
  setWeekFromTopPicker();
  refreshAll();
}

function scheduleSync() {
  if (!supabase || !syncCode) return;
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    pushPlan();
  }, 800);
}

async function pushPlan() {
  if (!supabase || !syncCode) return;
  const payload = getPlanPayload();
  safeSetItem("pantryLastSync", payload.updatedAt);
  lastSyncedAt = payload.updatedAt;
  updateSyncStatus("Syncing...");
  const { error } = await supabase.from("plans").upsert(
    {
      code: syncCode,
      payload,
      updated_at: payload.updatedAt,
    },
    { onConflict: "code" }
  );
  if (error) {
    updateSyncStatus("Sync failed.");
    return;
  }
  updateSyncStatus(`Synced at ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}.`);
}

async function pullPlan() {
  if (!supabase || !syncCode) return;
  updateSyncStatus("Syncing...");
  const { data, error } = await supabase.from("plans").select("payload, updated_at").eq("code", syncCode).maybeSingle();
  if (error) {
    updateSyncStatus("Sync failed.");
    return;
  }
  if (data?.payload) {
    const remoteUpdated = data.updated_at || data.payload.updatedAt || "";
    const localUpdated = safeGetItem("pantryLastSync") || "";
    if (!localUpdated || (remoteUpdated && remoteUpdated > localUpdated)) {
      applyPlanPayload(data.payload);
      lastSyncedAt = remoteUpdated;
      safeSetItem("pantryLastSync", remoteUpdated);
    }
  }
  updateSyncStatus(`Synced at ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}.`);
}

function renderRatingStars(target, recipeId) {
  target.innerHTML = "";
  target.classList.add("rating");
  const current = ratingsByRecipe[recipeId] || 0;
  for (let i = 1; i <= 5; i += 1) {
    const star = document.createElement("button");
    star.type = "button";
    star.className = `star ${i <= current ? "is-filled" : ""}`;
    star.textContent = "★";
    star.setAttribute("aria-label", `Rate ${i} star${i === 1 ? "" : "s"}`);
    star.addEventListener("click", (event) => {
      event.stopPropagation();
      ratingsByRecipe[recipeId] = i;
      saveState();
      renderRatingStars(target, recipeId);
    });
    target.appendChild(star);
  }
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

function getRecipeIcon(recipe) {
  const name = `${recipe.name} ${recipe.name_fr}`.toLowerCase();
  if (name.includes("lasagne") || name.includes("spaghetti")) return "🍝";
  if (name.includes("soup") || name.includes("soupe")) return "🥣";
  if (name.includes("salad") || name.includes("salade") || name.includes("taboul")) return "🥗";
  if (name.includes("curry")) return "🍛";
  if (name.includes("chili")) return "🌶️";
  if (name.includes("quiche")) return "🥧";
  if (name.includes("gratin")) return "🥔";
  if (name.includes("ratatouille")) return "🍆";
  if (name.includes("fajitas")) return "🌮";
  if (name.includes("fish") || name.includes("poisson")) return "🐟";
  if (name.includes("chicken") || name.includes("poulet")) return "🍗";
  if (name.includes("eggplant") || name.includes("aubergine")) return "🍆";
  if (name.includes("beans") || name.includes("lentil") || name.includes("lentille")) return "🫘";
  return "🍽️";
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

    const thumb = document.createElement("div");
    thumb.className = "recipe-thumb";
    if (recipe.id === "dahl-lentilles-epinards") {
      thumb.classList.add("thumb-dahl");
    }
    const imageSrc = getRecipeImage(recipe);
    if (imageSrc) {
      const img = document.createElement("img");
      img.src = imageSrc;
      img.alt = getRecipeName(recipe);
      img.loading = "lazy";
      if (recipe.id === "dahl-lentilles-epinards") {
        img.classList.add("fit-contain");
      }
      thumb.appendChild(img);
    } else {
      thumb.classList.add("is-fallback");
      const fallback = document.createElement("span");
      fallback.textContent = getRecipeIcon(recipe);
      thumb.appendChild(fallback);
    }

    const info = document.createElement("div");
    info.className = "recipe-info";
    const title = document.createElement("h3");
    title.className = "recipe-title";
    title.textContent = getRecipeName(recipe);

    const rating = document.createElement("div");
    renderRatingStars(rating, recipe.id);
    const line = document.createElement("div");
    line.className = "recipe-line";
    const utensil = getUtensilLabel(recipe);
    const protein = getProteinLabel(recipe);
    const lastSelected = getLastSelectedLabel(recipe.id);
    const time = computeTimeBreakdown(recipe);
    const parts = [
      `${t("time_total")} ${time.total} min`,
      `${t("time_cook")} ${time.cook} min`,
      `${recipe.servings} ${t("servings_label")}`,
      utensil,
      protein,
      lastSelected,
    ];
    parts.forEach((part) => {
      const pill = document.createElement("span");
      pill.className = "recipe-pill";
      pill.textContent = part;
      line.appendChild(pill);
    });
    info.append(title, rating, line);

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

    card.addEventListener("click", (event) => {
      if (event.target === actionBtn) return;
      renderRecipeDetails(recipe);
    });

    card.append(thumb, info, actionWrap);
    recipeGrid.appendChild(card);
  });
}

function renderRecipeDetails(recipe) {
  if (!recipeDetails && !recipeModalBody) return;
  const servings = recipe.servings;
  const ingredients = recipe.ingredients
    .map((ingredient) => {
      const displayQty = formatQuantity(ingredient.qty, ingredient.unit);
      const displayItem = translateIngredientItem(ingredient.item);
      return `<li>${displayItem} — ${displayQty} ${ingredient.unit}</li>`;
    })
    .join("");

  const html = `
    <h4 id="recipe-modal-title"><span class="recipe-icon">${getRecipeIcon(recipe)}</span>${getRecipeName(recipe)}</h4>
    <div class="detail-meta">${recipe.time} · ${servings} ${t("servings_label")}</div>
    <div class="rating" data-rating-for="${recipe.id}"></div>
    <ul>${ingredients}</ul>
  `;

  if (recipeModalBody && recipeModal) {
    recipeModalBody.innerHTML = html;
    const ratingTarget = recipeModalBody.querySelector(`[data-rating-for="${recipe.id}"]`);
    if (ratingTarget) renderRatingStars(ratingTarget, recipe.id);
    recipeModal.classList.add("is-open");
    recipeModal.setAttribute("aria-hidden", "false");
    if (recipeDetails) recipeDetails.innerHTML = "";
  } else if (recipeDetails) {
    recipeDetails.innerHTML = html;
  }
}

function normalizeShoppingItem(item) {
  const name = item.toLowerCase().trim();
  if (name === "water" || name === "hot water") return null;
  if (name === "brown onion" || name === "white onion" || name === "yellow onion") return "onion";
  if (name === "creme fraiche") return "cream";
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

      const link = document.createElement("a");
      link.className = "woolworths-link";
      link.href = `https://www.woolworths.com.au/shop/search/products?searchTerm=${encodeURIComponent(ingredient.item)}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "W";
      link.setAttribute("aria-label", `Search ${ingredient.item} on Woolworths`);
      link.addEventListener("click", (event) => {
        event.stopPropagation();
      });

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = Boolean(checkedItems[key]);
      if (checkbox.checked) row.classList.add("is-checked");
      checkbox.addEventListener("change", (event) => {
        checkedItems[key] = event.target.checked;
        row.classList.toggle("is-checked", event.target.checked);
        saveState();
      });

      row.append(left, link, checkbox);
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

function parseStepDurationMinutes(text) {
  const lower = String(text).toLowerCase();
  const hourMatch = lower.match(/(\d+)\s*(?:h|hour|hours)\b/);
  let minutes = 0;
  if (hourMatch) minutes += parseInt(hourMatch[1], 10) * 60;

  const minRange = lower.match(/(\d+)\s*(?:-|to)\s*(\d+)\s*(?:min|mins|minutes)\b/);
  if (minRange) {
    minutes += parseInt(minRange[2], 10);
  } else {
    const minMatch = lower.match(/(\d+)\s*(?:min|mins|minutes)\b/);
    if (minMatch) minutes += parseInt(minMatch[1], 10);
  }
  return minutes;
}

function formatTimer(minutes) {
  const totalSeconds = Math.max(0, minutes) * 60;
  const mm = Math.floor(totalSeconds / 60);
  const ss = totalSeconds % 60;
  return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

function playTimerSound() {
  try {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const osc = context.createOscillator();
    const gain = context.createGain();
    osc.type = "sine";
    osc.frequency.value = 880;
    gain.gain.value = 0.15;
    osc.connect(gain);
    gain.connect(context.destination);
    osc.start();
    setTimeout(() => {
      osc.stop();
      context.close();
    }, 700);
  } catch (error) {
    // ignore audio errors
  }
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
      const stepText = document.createElement("div");
      stepText.className = "step-text";
      stepText.textContent = `${index + 1}. ${step}`;
      stepCard.appendChild(stepText);

      const minutes = parseStepDurationMinutes(step);
      if (minutes > 0) {
        const timerRow = document.createElement("div");
        timerRow.className = "timer-row";

        const display = document.createElement("span");
        display.className = "timer-display";
        display.textContent = formatTimer(minutes);

        const startBtn = document.createElement("button");
        startBtn.className = "ghost timer-btn";
        startBtn.textContent = "Start timer";

        const reminderBtn = document.createElement("a");
        reminderBtn.className = "ghost timer-btn";
        reminderBtn.textContent = "Set phone reminder";
        reminderBtn.target = "_blank";
        reminderBtn.rel = "noopener";
        reminderBtn.href = `https://www.google.com/search?q=timer+${minutes}+minutes`;

        let intervalId = null;
        let remaining = minutes * 60;

        startBtn.addEventListener("click", () => {
          if (intervalId) return;
          startBtn.disabled = true;
          const tick = () => {
            const mm = Math.floor(remaining / 60);
            const ss = remaining % 60;
            display.textContent = `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
            if (remaining <= 0) {
              clearInterval(intervalId);
              intervalId = null;
              startBtn.disabled = false;
              playTimerSound();
              if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
              return;
            }
            remaining -= 1;
          };
          tick();
          intervalId = setInterval(tick, 1000);
        });

        timerRow.append(display, startBtn, reminderBtn);
        stepCard.appendChild(timerRow);
      }
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

function getNextWeekKey() {
  const start = getWeekStartFromDate(new Date());
  start.setDate(start.getDate() + 7);
  return getWeekKeyFromDate(start);
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
  currentWeekKey = (topWeekPicker && topWeekPicker.value) || getNextWeekKey();
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

function populateTopWeekOptions() {
  if (!topWeekPicker) return;
  topWeekPicker.innerHTML = "";
  const nowKey = getNextWeekKey();
  const [yearPart, weekPart] = nowKey.split("-W");
  const baseYear = parseInt(yearPart, 10);
  const baseWeek = parseInt(weekPart, 10);
  const totalWeeks = 20;

  for (let i = -2; i < totalWeeks; i += 1) {
    const date = getDateFromISOWeek(baseYear, baseWeek);
    date.setDate(date.getDate() + i * 7);
    const weekKey = getWeekKeyFromDate(date);
    const option = document.createElement("option");
    option.value = weekKey;
    option.textContent = formatWeekLabel(weekKey);
    topWeekPicker.appendChild(option);
  }
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
    const weekLabel = formatWeekLabel(currentWeekKey);
    heroCount.textContent = t("planned_count", selectedRecipes.length, weekLabel);
  }
  if (currentCookRecipeId && (selectedRecipesByWeek[cookWeekKey] || []).includes(currentCookRecipeId)) {
    renderCookCard(currentCookRecipeId);
  }
}

refreshAll();

populateTopWeekOptions();
if (topWeekPicker) {
  topWeekPicker.value = getNextWeekKey();
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

if (recipeModal) {
  recipeModal.addEventListener("click", (event) => {
    const shouldClose = event.target?.dataset?.modalClose === "true";
    if (!shouldClose) return;
    recipeModal.classList.remove("is-open");
    recipeModal.setAttribute("aria-hidden", "true");
  });
}
