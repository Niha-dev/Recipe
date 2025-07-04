const recipeData = [
  {
    name: "Spaghetti Carbonara",
    category: "non-veg",
    ingredients: [
      "200g spaghetti","100g pancetta","2 large eggs","50g Pecorino Romano cheese","Freshly ground black pepper","Salt"
    ],
    instructions:
      "1. Cook spaghetti in salted boiling water until al dente. 2. In a separate pan, cook pancetta until crispy. 3. Beat eggs in a bowl, then mix in grated Pecorino Romano cheese and black pepper. 4. Drain spaghetti and return to the pot. 5. Quickly mix in the pancetta and egg-cheese mixture, stirring vigorously to create a creamy sauce. 6. Serve immediately with additional cheese and pepper."
  },
  {
    name: "Beef Tacos",
    category: "non-veg",
    ingredients: [
      "500g ground beef","1 onion, chopped","2 cloves garlic, minced","1 tsp chili powder","1 tsp cumin","Salt and pepper to taste","8 taco shells","Shredded lettuce","Diced tomatoes","Grated cheddar cheese","Sour cream"
    ],
    instructions:
      "1. In a skillet, sauté chopped onion and minced garlic until translucent. 2. Add ground beef and cook until browned. 3. Stir in chili powder, cumin, salt, and pepper. Cook for another 5 minutes. 4. Warm taco shells according to package instructions. 5. Fill each shell with the beef mixture and top with lettuce, tomatoes, cheese, and sour cream. 6. Serve immediately."
  },
  {
    name: "Chicken Curry",
    category: "non-veg",
    ingredients: [
      "500g chicken pieces","2 onions, finely chopped","2 tomatoes, pureed","2 cloves garlic, minced","1 inch ginger, grated","2 tsp curry powder","1 tsp turmeric","1 tsp cumin","1 tsp coriander powder","Salt to taste","2 tbsp oil","Fresh coriander leaves for garnish"
    ],
    instructions:
      "1. Heat oil in a pan and sauté onions until golden brown. 2. Add garlic and ginger; cook for 2 minutes. 3. Add curry powder, turmeric, cumin, and coriander powder; cook for another minute. 4. Add chicken pieces and cook until they are no longer pink. 5. Pour in tomato puree and simmer for 20 minutes until chicken is cooked through. 6. Garnish with fresh coriander leaves and serve with rice or naan."
  },
  {
    name: "Mushroom Risotto",
    category: "veg",
    ingredients: [
      "1 cup Arborio rice", "200g mushrooms (sliced)", "1 onion (chopped)", "2 cloves garlic (minced)", "4 cups vegetable broth", "1/2 cup white wine", "2 tbsp butter", "1/4 cup grated Parmesan cheese", "salt and pepper to taste", "fresh parsley for garnish."
    ],
    instructions:
      "1. In a saucepan, heat vegetable broth and keep it warm. 2. In a separate pan, melt butter and sauté onions and garlic until translucent. 3. Add mushrooms and cook until tender. 4. Stir in Arborio rice and cook for 2 minutes. 5. Pour in white wine and stir until absorbed. 6. Add warm broth one ladle at a time, stirring continuously, allowing each addition to be absorbed before adding the next. 7. Continue until rice is creamy and al dente. 8. Stir in Parmesan cheese, season with salt and pepper, garnish with parsley, and serve hot."
  },
  {
    name: "Grilled Salmon",
    category: "non-veg",
    ingredients: [
      "2 salmon fillets","2 tbsp olive oil","1 lemon, sliced","2 cloves garlic, minced","Salt and pepper to taste","Fresh dill for garnish"
    ],
    instructions:
      "1. Preheat grill to medium-high heat. 2. In a small bowl, mix olive oil, minced garlic, salt, and pepper. 3. Brush salmon fillets with the olive oil mixture. 4. Place lemon slices on top of each fillet. 5. Grill salmon for 6-8 minutes per side, or until cooked through. 6. Garnish with fresh dill and serve with your choice of sides."
  },
  {
    name: "Tomato Soup",
    category: "veg",
    ingredients: [
      "4 cups ripe tomatoes, chopped","1 onion, chopped","2 cloves garlic, minced","2 cups vegetable broth","1 tsp sugar","Salt and pepper to taste","2 tbsp olive oil","Fresh basil for garnish"
    ],
    instructions:
      "1. In a pot, heat olive oil and sauté onions and garlic until soft. 2. Add chopped tomatoes and cook for about 10 minutes until they break down. 3. Pour in vegetable broth and add sugar, salt, and pepper. 4. Simmer for another 15 minutes. 5. Use an immersion blender to puree the soup until smooth. 6. Serve hot, garnished with fresh basil."
  },
  {
    name: "Caser Salad",
    category: "veg",
    ingredients: [
        "1 head romaine lettuce, chopped","1/2 cup crumbled feta cheese","1/2 cup cherry tomatoes, halved","1/2 cup sliced avocado","1/4 cup crumbled parmesan cheese", "1/4 cup sliced cucumber","1/4 cup sliced red onion","1/4 cup sliced green bell pepper",
    ],
    instructions:
        "1. In a large bowl, combine the chopped romaine lettuce, cherry tomatoes, sliced avocado, cucumber, red onion, and green bell pepper. 2. Add the crumbled feta and parmesan cheese on top. 3. Drizzle with your favorite dressing (like balsamic vinaigrette or Caesar dressing) and toss gently to combine. 4. Serve immediately as a refreshing side or main dish."
  },
  {
    name: "Chicken alfredo",
    category: "non-veg",
    ingredients: [
        "2 boneless, skinless chicken breasts","2 tbsp olive oil","1 onion, chopped","2 cloves garlic, minced",        "2 cups alfredo sauce","1/2 cup grated parmesan cheese",        "1/2 cup fresh basil, chopped",        "Salt and pepper to taste",
    ],
    instructions:
        "1. Heat olive oil in a skillet over medium heat. 2. Season chicken breasts with salt and pepper, then cook in the skillet until golden brown and cooked through, about 6-7 minutes per side. 3. Remove chicken from skillet and let rest before slicing. 4. In the same skillet, sauté chopped onion and minced garlic until translucent. 5. Add alfredo sauce and bring to a simmer, then stir in grated parmesan cheese until melted. 6. Add sliced chicken back to the skillet, coating it with the sauce. 7. Garnish with fresh basil and serve over pasta or rice."
  },
  {
    name: "Veggie wrap",
    category: "veg",
    ingredients: [
        "1 large whole wheat tortilla","1/4 cup shredded lettuce","1/4 cup diced tomatoes","1/4 cup diced onions","1/4 cup diced peppers","1/4 cup diced mushrooms","1/4 cup sliced avocado",
    ],
    instructions:
        "1. Lay the whole wheat tortilla flat on a clean surface. 2. Layer the shredded lettuce, diced tomatoes, onions, peppers, mushrooms, and sliced avocado in the center of the tortilla. 3. Drizzle with your favorite dressing or sauce (like hummus or ranch). 4. Fold in the sides of the tortilla and then roll it up tightly from the bottom to the top. 5. Slice in half and serve as a healthy lunch or snack."
  },
  {
    name: "Fried Rice",
    category: "veg",
    ingredients: [
      "2 cups cooked rice (preferably day-old)","1 cup mixed vegetables (carrots, peas, corn)","2 eggs, beaten","3 tbsp soy sauce","2 green onions, chopped","2 cloves garlic, minced","2 tbsp vegetable oil","Salt and pepper to taste"
    ],
    instructions:
      "1. Heat vegetable oil in a large skillet or wok over medium-high heat. 2. Add minced garlic and sauté for about 30 seconds until fragrant. 3. Push the garlic to one side of the pan and pour in the beaten eggs, scrambling them until fully cooked. 4. Add mixed vegetables and cook for another 2-3 minutes until they are tender. 5. Stir in the cooked rice, breaking up any clumps, and add soy sauce, salt, and pepper. 6. Cook for an additional 3-4 minutes, stirring frequently. 7. Garnish with chopped green onions before serving."
  },
  {
    name: "Stuffed Peppers",
    category: "veg",
    ingredients: [
        "4 bell peppers (any color)","1/2 cup shredded mozzarella cheese","1/2 cup grated parmesan cheese","1/2 cup diced tomatoes","1/4 cup sliced mushrooms","1/4 cup sliced onions","1/4 cup sliced green bell pepper","1/4 cup sliced red bell pepper",
    ],
    instructions:
        "1. Preheat the oven to 375°F (190°C). 2. Cut the tops off the bell peppers and remove the seeds. 3. In a bowl, mix together the shredded mozzarella cheese, grated parmesan cheese, diced tomatoes, sliced mushrooms, onions, green bell pepper, and red bell pepper. 4. Stuff each bell pepper with the cheese and vegetable mixture. 5. Place the stuffed peppers in a baking dish and cover with aluminum foil. 6. Bake for 25-30 minutes until the peppers are tender and the cheese is melted. 7. Serve hot as a delicious vegetarian main dish."
  },
  {
    name:"Tuna Salad",
    category: "non-veg",
    ingredients: [
        "1 can tuna, drained","1/4 cup mayonnaise","1/4 cup ketchup","1/4 cup mustard","1/4 cup pickle relish","1/4 cup celery","1/4 cup onion","1/4 cup lettuce","1/4 cup tomato",
    ],
    instructions:
        "1. In a bowl, combine the drained tuna, mayonnaise, ketchup, mustard, pickle relish, celery, and onion. 2. Mix well until all ingredients are evenly combined. 3. Serve the tuna salad on a bed of lettuce with sliced tomatoes on the side. 4. Optionally, you can also serve it in a sandwich or wrap."
  },
  {
    name: "Butter chicken",
    category: "non-veg",
    ingredients: [
        "500g boneless chicken, cut into pieces","2 tbsp butter","1 onion, chopped","2 cloves garlic, minced","1 tsp cumin","1 tsp coriander","1 tsp turmeric","1 tsp chili powder","1 tsp salt","1 tsp garam masala","1 tsp paprika","1 tsp cayenne pepper",
    ],
    instructions:
        "1. In a large skillet, melt butter over medium heat. 2. Add chopped onion and minced garlic; sauté until translucent. 3. Stir in cumin, coriander, turmeric, chili powder, salt, garam masala, paprika, and cayenne pepper; cook for 1-2 minutes. 4. Add chicken pieces and cook until browned on all sides. 5. Reduce heat to low, cover, and simmer for about 20 minutes until chicken is cooked through. 6. Serve hot with rice or naan."
  },
  {
    name: "Chili Con Carne",
    category: "non-veg",
    ingredients: [
        "500g ground beef","1 onion, chopped","2 cloves garlic, minced","1 tsp chili powder","1 tsp cumin","1 tsp salt","1 tsp paprika","1 tsp cayenne pepper","1 tsp oregano","1 tsp garlic powder","1 tsp onion powder",
    ],
    instructions:
        "1. In a large pot, brown the ground beef over medium heat. 2. Add chopped onion and minced garlic; sauté until translucent. 3. Stir in chili powder, cumin, salt, paprika, cayenne pepper, oregano, garlic powder, and onion powder; cook for 1-2 minutes. 4. Add diced tomatoes and kidney beans; simmer for about 30 minutes until thickened. 5. Serve hot with cornbread or over rice."
  },
  {
    name: "Eggplant Parmesan",
    category: "veg",
    ingredients: [
        "2 large eggplants, sliced into rounds","1/2 cup grated parmesan cheese","1/2 cup grated mozzarella cheese","1/4 cup sliced tomatoes","1/4 cup sliced mushrooms","1/4 cup sliced onions","1/4 cup sliced green bell pepper","1/4 cup sliced red bell pepper",
    ],
    instructions:
        "1. Preheat the oven to 375°F (190°C). 2. Arrange sliced eggplants on a baking sheet and sprinkle with salt; let sit for 30 minutes to draw out moisture. 3. Rinse and pat dry the eggplant slices. 4. In a baking dish, layer eggplant slices, sliced tomatoes, mushrooms, onions, green bell pepper, and red bell pepper. 5. Sprinkle grated parmesan and mozzarella cheese on top. 6. Bake for 30-35 minutes until the cheese is melted and bubbly. 7. Serve hot as a delicious vegetarian main dish."
  },
  {
    name: "Shirmp Scampi",
    category: "non-veg",
    ingredients: [
        "500g shrimp, peeled and deveined","1/2 cup olive oil","1/2 cup tomato sauce","1/4 cup garlic, minced","1/4 cup parsley, chopped","1/4 cup basil, chopped","1/4 cup lemon juice","Salt and pepper to taste",
    ],
    instructions:
        "1. In a large skillet, heat olive oil over medium heat. 2. Add minced garlic and sauté until fragrant. 3. Add shrimp and cook until they turn pink, about 3-4 minutes. 4. Stir in tomato sauce, parsley, basil, lemon juice, salt, and pepper; cook for another 2-3 minutes. 5. Serve hot with pasta or crusty bread."
  },
  {
    name:"Mac and Cheese",
    category: "veg",
    ingredients: [
        "2 cups elbow macaroni","2 cups shredded cheddar cheese","1/2 cup grated parmesan cheese","1/2 cup milk","1/4 cup butter","Salt and pepper to taste",
    ],
    instructions:
        "1. Cook elbow macaroni according to package instructions; drain and set aside. 2. In a large pot, melt butter over medium heat. 3. Stir in milk, salt, and pepper; bring to a simmer. 4. Add shredded cheddar cheese and grated parmesan cheese; stir until melted and smooth. 5. Add cooked macaroni to the cheese sauce; mix well to coat. 6. Serve hot as a comforting side or main dish."
  },
  {
    name:"Quiche Lorraine",
    category: "veg",
    ingredients: [
        "1 pre-made pie crust","4 large eggs","1 cup heavy cream","1/2 cup grated Gruyère cheese","1/2 cup diced ham","1/4 cup chopped green onions","Salt and pepper to taste",
    ],
    instructions:
        "1. Preheat the oven to 375°F (190°C). 2. In a bowl, whisk together eggs, heavy cream, salt, and pepper until well combined. 3. Place the pre-made pie crust in a pie dish. 4. Sprinkle diced ham and chopped green onions evenly over the crust. 5. Pour the egg mixture over the ham and onions, then sprinkle grated Gruyère cheese on top. 6. Bake for 30-35 minutes until the quiche is set and golden brown on top. 7. Let it cool slightly before slicing and serving."
  },
  {
    name: "Lentil Soup",
    category: "veg",
    ingredients: [
        "1 cup lentils, rinsed","1 onion, diced","2 carrots, diced","2 celery stalks, diced","2 green peppers, diced","1/2 cup diced tomatoes","1/2 cup diced mushrooms","1/2 cup diced celery",
    ],
    instructions:
        "1. In a large pot, sauté diced onion, carrots, celery, and green peppers until softened. 2. Add rinsed lentils, diced tomatoes, mushrooms, and celery to the pot. 3. Pour in enough vegetable broth to cover the ingredients. 4. Bring to a boil, then reduce heat and simmer for about 30-40 minutes until lentils are tender. 5. Season with salt and pepper to taste. 6. Serve hot as a hearty soup."
  },
  {
    name: "BBQ Ribs",
    category: "non-veg",
    ingredients: [
        "2 lbs pork ribs","1/2 cup barbecue sauce","1/2 cup ketchup","1/4 cup brown sugar","1/4 cup mustard","Salt and pepper to taste",
    ],
    instructions:
        "1. Preheat the oven to 300°F (150°C). 2. In a bowl, mix together barbecue sauce, ketchup, brown sugar, mustard, salt, and pepper. 3. Place the pork ribs on a baking sheet lined with aluminum foil. 4. Brush the sauce mixture generously over the ribs, coating them well. 5. Cover the ribs with another piece of aluminum foil and bake for 2-3 hours until tender. 6. Remove from the oven, uncover, and brush with additional sauce if desired. 7. Serve hot with extra barbecue sauce on the side."
  },
  {
    name: "Teriyaki Chicken",
    category: "non-veg",
    ingredients: [
        "500g boneless chicken thighs","2 tbsp teriyaki sauce","1 tsp soy sauce","1 tsp sugar","1 tsp garlic powder","1 tsp onion powder","Salt and pepper to taste",
    ],
    instructions:
        "1. In a bowl, mix together teriyaki sauce, soy sauce, sugar, garlic powder, onion powder, salt, and pepper. 2. Add the boneless chicken thighs to the marinade and let it sit for at least 30 minutes. 3. Preheat a grill or skillet over medium heat. 4. Cook the marinated chicken for about 6-7 minutes on each side until cooked through and caramelized. 5. Serve hot with steamed rice and vegetables."
  },
  {
    name: "Avocado Toast",
    category: "tiffin",
    ingredients: [
        "2 slices whole grain bread","1 ripe avocado","1/2 tsp lemon juice","Salt and pepper to taste",
    ],
    instructions:
        "1. Toast the slices of whole grain bread until golden brown. 2. In a bowl, mash the ripe avocado with lemon juice, salt, and pepper until smooth. 3. Spread the avocado mixture evenly over the toasted bread. 4. Add optional toppings like sliced tomatoes, radishes, or a poached egg for extra flavor and nutrition. 5. Serve immediately as a healthy breakfast or snack."
  },
  {
    name: "Chicken Noodle Soup",
    category: "non-veg",
    ingredients: [
        "1 lb boneless chicken breasts","2 cups cooked chicken noodles","1/2 cup sliced carrots","1/2 cup sliced celery","1/2 cup sliced green onions","1/2 cup diced tomatoes","4 cups chicken broth","Salt and pepper to taste",
    ],
    instructions:
        "1. In a large pot, bring the chicken broth to a boil. 2. Add the boneless chicken breasts and cook until fully cooked, about 15-20 minutes. 3. Remove the chicken from the pot, shred it, and return it to the pot. 4. Add sliced carrots, celery, green onions, diced tomatoes, and cooked chicken noodles. 5. Season with salt and pepper to taste. 6. Simmer for another 10-15 minutes until vegetables are tender. 7. Serve hot as a comforting soup."
  },
  {
    name: "Pulled Pork Sandwiches",
    category: "non-veg",
    ingredients: [
        "2 lbs pork shoulder","1/2 cup barbecue sauce","1/4 cup apple cider vinegar","1/4 cup brown sugar","1 tsp paprika","1 tsp garlic powder","Salt and pepper to taste","4 hamburger buns"
    ],
    instructions:
        "1. In a slow cooker, combine the pork shoulder, barbecue sauce, apple cider vinegar, brown sugar, paprika, garlic powder, salt, and pepper. 2. Cook on low for 8 hours or until the pork is tender and easily shredded. 3. Remove the pork from the slow cooker and shred it with two forks. 4. Return the shredded pork to the slow cooker and mix it with the sauce. 5. Serve the pulled pork on hamburger buns with extra barbecue sauce if desired."
  },
  {
    name: "Zucchini Noodles",
    category: "veg",
    ingredients: [
        "2 medium zucchinis","1/4 cup olive oil","2 cloves garlic, minced","1/4 tsp red pepper flakes","Salt and pepper to taste","Grated Parmesan cheese for serving"
    ],
    instructions:
        "1. Using a spiralizer or vegetable peeler, create noodles from the zucchinis. 2. In a large skillet, heat olive oil over medium heat. 3. Add minced garlic and red pepper flakes; sauté for about 30 seconds until fragrant. 4. Add the zucchini noodles and cook for 2-3 minutes until just tender. 5. Season with salt and pepper to taste. 6. Serve hot, topped with grated Parmesan cheese."
  },
  {
    name: "Greek Salad",
    category: "veg",
    ingredients: [
        "1/2 cup cherry tomatoes",
        "1/2 cup cucumbers",
        "1/2 cup green olives",
        "1/2 cup red onions",
        "1/2 cup feta cheese",
        "1/2 cup kalamata olives",
        "1/4 cup olive oil",
        "Salt and pepper to taste",
    ],
    instructions:
        "1. In a large bowl, combine cherry tomatoes, cucumbers, green olives, red onions, feta cheese, and kalamata olives. 2. Drizzle with olive oil and season with salt and pepper to taste. 3. Toss gently to combine all ingredients. 4. Serve immediately as a refreshing side salad or light meal."
  },
  {
    name: "Pesto Pasta",
    category: "veg",
    ingredients: [
        "2 cups cooked pasta (any type)",
        "1/4 cup olive oil",
        "1/4 cup grated Parmesan cheese",
        "1/4 cup fresh basil, chopped",
        "Salt and pepper to taste",
    ],
    instructions:
        "1. In a large bowl, combine cooked pasta, olive oil, grated Parmesan cheese, and chopped fresh basil. 2. Toss gently to coat the pasta evenly with the pesto. 3. Season with salt and pepper to taste. 4. Serve immediately as a quick and flavorful meal."
  },
  {
    name: "Veggie Pizza",
    category: "veg",
    ingredients: [
        "1/2 cup sliced mushrooms",
        "1/2 cup sliced bell peppers",
        "1/2 cup sliced onions",
        "1/2 cup sliced green peppers",
        "1/2 cup sliced tomatoes",
        "1/2 cup sliced olives",
        "1/2 cup sliced peppers",
    ],
    instructions:
        "1. Preheat the oven to 450°F (230°C). 2. Roll out pizza dough on a floured surface to your desired thickness. 3. Spread pizza sauce evenly over the dough. 4. Arrange sliced mushrooms, bell peppers, onions, green peppers, tomatoes, olives, and peppers on top of the sauce. 5. Sprinkle with shredded mozzarella cheese. 6. Bake in the preheated oven for about 12-15 minutes until the crust is golden and the cheese is bubbly. 7. Slice and serve hot."
  },
  {
    name: "Garlic Bread",
    category: "Snacks",
    ingredients: [
        "1 loaf French bread",
        "1/2 cup unsalted butter, softened",
        "4 cloves garlic, minced",
        "1/4 cup fresh parsley, chopped",
        "Salt to taste"
    ],
    instructions:
        "1. Preheat the oven to 375°F (190°C). 2. In a bowl, mix softened butter, minced garlic, chopped parsley, and salt until well combined. 3. Slice the French bread in half lengthwise. 4. Spread the garlic butter mixture evenly over both halves of the bread. 5. Place the bread on a baking sheet and bake for about 10-12 minutes until golden and crispy. 6. Slice and serve warm as a delicious side or appetizer."
  },
  {
    name: "Pancake Stack",
    category: "Snacks",
    ingredients: [
        "2 eggs",   
        "1/2 cup milk", 
        "1/2 cup flour", 
        "1/4 cup sugar", 
        "1/4 tsp baking powder", 
        "1/4 tsp salt", 
        "1/4 tsp cinnamon", 
        "1/4 tsp nutmeg", 
        "1/4 tsp vanilla extract", 
        "1/4 cup melted butter", 
        "1/2 cup sliced bananas", 
        "1/2 cup sliced strawberries", 
        "1/2 cup sliced blueberries", 
        "1/2 cup sliced raspberries", 
        "1/2 cup sliced peaches", 
        "1/2 cup sliced apricots", 
        "1/2 cup sliced plums", 
        "1/2 cup sliced cherries", 
    ],
    instructions:
        "1. In a bowl, whisk together eggs, milk, flour, sugar, baking powder, salt, cinnamon, nutmeg, vanilla extract, and melted butter until smooth. 2. Heat a non-stick skillet over medium heat and pour in a ladleful of batter to form a pancake. 3. Cook until bubbles form on the surface, then flip and cook until golden brown on both sides. 4. Repeat with the remaining batter to make more pancakes. 5. Stack the pancakes on a plate and top with sliced bananas, strawberries, blueberries, raspberries, peaches, apricots, plums, and cherries. 6. Serve warm with maple syrup or honey if desired."
  },
  {
    name: "French Toast",
    category: "Snacks",
    ingredients: [
        "4 slices of bread",
        "2 eggs",
        "1/2 cup milk",
        "1/4 cup butter",
        "Salt and pepper to taste",
    ],
    instructions:
        "1. In a bowl, whisk together eggs, milk, salt, and pepper. 2. Heat a skillet over medium heat and melt butter. 3. Dip each slice of bread into the egg mixture, coating both sides. 4. Place the coated bread slices in the skillet and cook until golden brown on both sides, about 2-3 minutes per side. 5. Serve hot with maple syrup or powdered sugar if desired."
  },
  {
    name: "Omelette",
    category: "Tiffin",
    ingredients: [
        "2 eggs",
        "1/2 cup milk",
        "1/4 cup butter",
        "Salt and pepper to taste",
    ],
    instructions:
        "1. In a bowl, whisk together eggs, milk, salt, and pepper until well combined. 2. Heat a non-stick skillet over medium heat and melt butter. 3. Pour the egg mixture into the skillet and cook until the edges start to set. 4. Gently lift the edges with a spatula and tilt the skillet to allow uncooked eggs to flow to the edges. 5. Cook until the omelette is fully set but still slightly soft in the center, about 3-4 minutes. 6. Fold the omelette in half and serve hot."
  },
  {
    name: "Falafel Toast",
    category: "veg",
    ingredients: [
        "1 cup cooked falafel",
        "1/2 cup hummus",
        "1/2 cup sliced tomatoes",
        "1/2 cup sliced onions",
        "1/2 cup sliced lettuce",
        "1/2 cup sliced peppers",
        "Salt and pepper to taste",
    ],
    instructions:
        "1. Toast slices of bread until golden brown. 2. Spread hummus evenly over each slice of toast. 3. Top with cooked falafel, sliced tomatoes, onions, lettuce, and peppers. 4. Season with salt and pepper to taste. 5. Serve immediately as a delicious and healthy snack or light meal."   
  },
  {
    name: "Biryani",
    category: "Biryani",
    ingredients: [
        "2 cups basmati rice",
        "500g chicken or vegetables",
        "1 large onion, sliced",
        "2 tomatoes, chopped",
        "2 green chilies, slit",
        "1/4 cup yogurt",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped coriander leaves",
        "2 tsp biryani masala",
        "Salt to taste",
        "4 cups water",
        "3 tbsp oil or ghee"
    ],
    instructions:
        "1. Rinse the basmati rice under cold water until the water runs clear, then soak it in water for 30 minutes. 2. In a large pot, heat oil or ghee and sauté sliced onions until golden brown. 3. Add chopped tomatoes and green chilies; cook until tomatoes are soft. 4. Stir in chicken or vegetables, yogurt, mint leaves, coriander leaves, biryani masala, and salt; cook until the meat is browned. 5. Drain the soaked rice and add it to the pot along with 4 cups of water. 6. Bring to a boil, then reduce heat to low, cover, and simmer for about 20-25 minutes until the rice is cooked and the liquid is absorbed. 7. Fluff the biryani with a fork and serve hot with raita or salad."
  },
  {
    name: "Shakshuka",
    category: "veg",
    ingredients: [
        "4 large eggs",
        "1 can diced tomatoes",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 tsp cumin",
        "1 tsp paprika",
        "Salt and pepper to taste",
        "2 tbsp olive oil",
        "Fresh parsley for garnish"
    ],
    instructions:
        "1. In a large skillet, heat olive oil over medium heat. 2. Add chopped onion and minced garlic; sauté until translucent. 3. Stir in cumin, paprika, salt, and pepper; cook for another minute. 4. Pour in the can of diced tomatoes and simmer for about 10 minutes until the sauce thickens. 5. Make small wells in the sauce and crack an egg into each well. 6. Cover the skillet and cook until the eggs are set to your liking, about 5-7 minutes. 7. Garnish with fresh parsley and serve with crusty bread."
  },
  {
    name: "Roasted Chicken",
    category: "non-veg",
    ingredients: [
        "1 whole chicken (about 1.5 kg)",
        "2 tbsp olive oil",
        "4 cloves garlic, minced",
        "1 lemon, halved",
        "1 tsp dried thyme",
        "Salt and pepper to taste",
        "Fresh rosemary for garnish"
    ],
    instructions:
        "1. Preheat the oven to 220°C (425°F). 2. Rub the whole chicken with olive oil, minced garlic, salt, pepper, and dried thyme. 3. Squeeze the juice of one lemon half over the chicken and place the lemon halves inside the cavity. 4. Place the chicken in a roasting pan and roast for about 1 hour or until the internal temperature reaches 75°C (165°F). 5. Let it rest for 10 minutes before carving. 6. Garnish with fresh rosemary and serve with roasted vegetables."
  },
  {
    name: "Mashed Potatoes",
    category: "veg",
    ingredients: [
        "4 large potatoes, peeled and cubed",
        "1/2 cup milk", 
        "1/4 cup butter",
        "Salt and pepper to taste",
    ],
    instructions:
        "1. Boil the cubed potatoes in salted water until tender, about 15-20 minutes. 2. Drain the potatoes and return them to the pot. 3. Add milk, butter, salt, and pepper; mash until smooth and creamy. 4. Adjust seasoning to taste and serve hot as a side dish."
  },
  {
    name: "Cabbage Stir Fry",
    category: "veg",
    ingredients: [
        "1 small cabbage, shredded",
        "2 carrots, julienned",
        "1 bell pepper, sliced",
        "2 cloves garlic, minced",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil",
        "Salt and pepper to taste",
        "Sesame seeds for garnish"
    ],
    instructions:
        "1. In a large skillet or wok, heat sesame oil over medium-high heat. 2. Add minced garlic and sauté for about 30 seconds until fragrant. 3. Add shredded cabbage, julienned carrots, and sliced bell pepper; stir-fry for about 5-7 minutes until the vegetables are tender-crisp. 4. Pour in soy sauce, season with salt and pepper, and toss to combine. 5. Garnish with sesame seeds before serving hot as a side dish."
  },
  {
    name: "Grilled Cheese",
    category: "Snacks",
    ingredients: [
        "4 slices of bread",
        "4 slices of cheese (cheddar, mozzarella, or your choice)",
        "2 tbsp butter",
        "Salt and pepper to taste"
    ],
    instructions:
        "1. Heat a skillet over medium heat. 2. Butter one side of each slice of bread. 3. Place two slices of bread, buttered side down, in the skillet. 4. Layer two slices of cheese on top of each slice of bread. 5. Top with the remaining slices of bread, buttered side up. 6. Cook until the bottom is golden brown, about 3-4 minutes, then flip and cook the other side until golden and the cheese is melted. 7. Slice and serve hot."
  },
  {
    name: "Sloppy Joes",
    category: "non-veg",
    ingredients: [
        "500g ground beef",
        "1/2 cup ketchup",
        "1/4 cup barbecue sauce",
        "1/4 cup diced onions",
        "1/4 cup diced bell peppers",
        "1 tbsp Worcestershire sauce",
        "Salt and pepper to taste",
        "4 hamburger buns"
    ],
    instructions:
        "1. In a skillet, brown the ground beef over medium heat. 2. Add diced onions and bell peppers; cook until softened. 3. Stir in ketchup, barbecue sauce, Worcestershire sauce, salt, and pepper; simmer for about 10 minutes until thickened. 4. Serve the mixture on hamburger buns for a delicious sloppy joe sandwich."
  },
  {
    name: "Tandoori Chicken",
    category: "non-veg",
    ingredients: [
        "500g chicken pieces (legs or thighs)",
        "1/2 cup plain yogurt", 
        "1/4 cup olive oil",
        "1/4 cup lemon juice",
        "Salt and pepper to taste", 
        "1 tsp cumin",
    ],
    instructions:
        "1. In a bowl, mix plain yogurt, olive oil, lemon juice, salt, pepper, and cumin to create the marinade. 2. Add the chicken pieces to the marinade, ensuring they are well coated. 3. Cover and refrigerate for at least 2 hours or overnight for best results. 4. Preheat the oven to 200°C (400°F). 5. Place the marinated chicken on a baking sheet and bake for about 30-35 minutes until cooked through and slightly charred. 6. Serve hot with naan or rice."
  },
  {
    name: "Fish Tikka",
    category: "non-veg",
    ingredients: [
        "500g fish fillets (like salmon or tilapia)",
        "1/2 cup plain yogurt",
        "1/4 cup lemon juice",
        "1 tbsp ginger-garlic paste",
        "1 tsp turmeric powder",
        "1 tsp red chili powder",
        "Salt to taste",
        "Fresh coriander for garnish"
    ],
    instructions:
        "1. In a bowl, mix plain yogurt, lemon juice, ginger-garlic paste, turmeric powder, red chili powder, and salt to create the marinade. 2. Cut the fish fillets into bite-sized pieces and add them to the marinade, ensuring they are well coated. 3. Cover and refrigerate for at least 30 minutes. 4. Preheat the oven to 220°C (425°F). 5. Place the marinated fish on a baking sheet lined with parchment paper. 6. Bake for about 15-20 minutes until the fish is cooked through and slightly charred. 7. Garnish with fresh coriander and serve hot with mint chutney."
  },
  {
    name: "Paneer Butter Masala",
    category: "veg",
    ingredients: [
        "250g paneer, cubed",
        "1/2 cup butter",
        "1 onion, finely chopped",
        "2 tomatoes, pureed",
        "1/4 cup cream",
        "1 tsp ginger-garlic paste",
        "1 tsp garam masala",
        "Salt to taste",
        "Fresh coriander for garnish"
    ],
    instructions:
        "1. In a pan, melt butter over medium heat and sauté the chopped onion until golden brown. 2. Add ginger-garlic paste and cook for another minute. 3. Stir in the tomato puree and cook until the oil separates from the mixture. 4. Add garam masala and salt; mix well. 5. Gently add the cubed paneer and cook for about 5 minutes, allowing it to absorb the flavors. 6. Stir in the cream and cook for another 2-3 minutes. 7. Garnish with fresh coriander and serve hot with naan or rice."
  },
  {
    name: "Kale Chips",
    category: "Snacks",
    ingredients: [
        "1 bunch kale, washed and dried",
        "2 tbsp olive oil",
        "Salt and pepper to taste",
        "1 tsp paprika",
        "1 tsp garlic powder",
        "1 tsp onion powder",
    ],
    instructions:
        "1. Preheat the oven to 150°C (300°F). 2. Tear the kale leaves into bite-sized pieces, removing the tough stems. 3. In a large bowl, toss the kale with olive oil, salt, pepper, paprika, garlic powder, and onion powder until evenly coated. 4. Spread the kale in a single layer on a baking sheet lined with parchment paper. 5. Bake for about 15-20 minutes until the edges are crispy but not burnt. 6. Let them cool before serving as a healthy snack."
  },
  {
    name: "Meatballs",
    category: "non-veg",
    ingredients: [
        "500g ground beef or turkey",
        "1/2 cup breadcrumbs",
        "1/4 cup grated Parmesan cheese",
        "1/4 cup chopped parsley",
        "1 egg",
        "2 cloves garlic, minced",
        "Salt and pepper to taste",
        "1 tsp Italian seasoning"
    ],
    instructions:
        "1. Preheat the oven to 200°C (400°F). 2. In a large bowl, combine ground meat, breadcrumbs, Parmesan cheese, parsley, egg, minced garlic, salt, pepper, and Italian seasoning. 3. Mix well until all ingredients are combined. 4. Shape the mixture into small meatballs and place them on a baking sheet lined with parchment paper. 5. Bake for about 20-25 minutes until cooked through and browned. 6. Serve with marinara sauce or as a main dish."
  },
  {
    name: "Sweet Corn Soup",
    category: "veg",
    ingredients: [
        "1 cup sweet corn kernels (fresh or frozen)",
        "1/2 cup diced potatoes",
        "1/2 cup diced carrots",
        "1/2 cup diced onions",
        "1/2 cup diced celery",
        "1/2 cup diced green bell peppers",
        "1/2 cup diced red bell peppers",
        "1/2 cup diced mushrooms",
        "1/2 cup diced spinach",
        "1/2 cup diced kale",
        "1/2 cup diced zucchini",
    ],
    instructions:
        "1. In a large pot, sauté diced onions, celery, and bell peppers until softened. 2. Add diced potatoes, carrots, mushrooms, spinach, kale, zucchini, and sweet corn kernels; cook for another 5 minutes. 3. Pour in enough vegetable broth to cover the vegetables and bring to a boil. 4. Reduce heat and simmer for about 20-25 minutes until all vegetables are tender. 5. Season with salt and pepper to taste. 6. Serve hot as a comforting soup."
  },
  {
    name: "Chana Masala",
    category: "veg",
    ingredients: [
        "1 cup chickpeas (canned or cooked)",
        "1 onion, finely chopped",
        "2 tomatoes, pureed",
        "1/4 cup cream",
        "1 tsp ginger-garlic paste",
        "1 tsp garam masala",
        "Salt to taste",
        "Fresh coriander for garnish"
    ],
    instructions:
        "1. In a pan, heat oil and sauté the chopped onion until golden brown. 2. Add ginger-garlic paste and cook for another minute. 3. Stir in the tomato puree and cook until the oil separates from the mixture. 4. Add garam masala and salt; mix well. 5. Gently add the chickpeas and cook for about 5 minutes, allowing them to absorb the flavors. 6. Stir in the cream and cook for another 2-3 minutes. 7. Garnish with fresh coriander and serve hot with naan or rice."
  },
  {
    name: "Chocolate Cake",
    category: "cakes",
    ingredients: [
        "1 3/4 cups all-purpose flour",
        "3/4 cup unsweetened cocoa powder",
        "2 cups sugar",
        "1 1/2 tsp baking powder",
        "1 1/2 tsp baking soda",
        "1 tsp salt",
        "2 large eggs",
        "1 cup milk",
        "1/2 cup vegetable oil",
        "2 tsp vanilla extract",
        "1 cup boiling water"
    ],
    instructions:
        "1. Preheat the oven to 350°F (175°C). Grease and flour two 9-inch round cake pans. 2. In a large bowl, sift together flour, cocoa powder, sugar, baking powder, baking soda, and salt. 3. Add eggs, milk, vegetable oil, and vanilla extract; beat on medium speed for 2 minutes. 4. Stir in boiling water until well combined (the batter will be thin). 5. Pour the batter evenly into the prepared pans. 6. Bake for 30-35 minutes or until a toothpick inserted in the center comes out clean. 7. Let the cakes cool in the pans for 10 minutes before transferring to wire racks to cool completely."
  },
  {
    name: "Banana Bread",
    category: "cakes",
    ingredients: [
        "3 ripe bananas, mashed",
        "1/3 cup melted butter",
        "2 eggs",
        "1/2 cup sugar",
        "1 tsp vanilla extract",
        "1/2 tsp baking powder",
        "1/4 tsp salt",
        "1 cup all-purpose flour",
    ],
    instructions:
        "1. Preheat the oven to 350°F (175°C). Grease a 9x5-inch loaf pan. 2. In a mixing bowl, combine mashed bananas and melted butter. 3. Stir in eggs, sugar, and vanilla extract until well combined. 4. Add baking powder and salt; mix well. 5. Gradually add flour, stirring until just combined (do not overmix). 6. Pour the batter into the prepared loaf pan. 7. Bake for 60-65 minutes or until a toothpick inserted in the center comes out clean. 8. Let it cool in the pan for 10 minutes before transferring to a wire rack to cool completely."
  },
  {
    name: "Fruit Smoothie",
    category: "Snacks",
    ingredients: [
        "1 banana",
        "1/2 cup strawberries",
        "1/2 cup blueberries",
        "1/2 cup yogurt",
        "1/2 cup milk",
        "1 tbsp honey (optional)",
    ],
    instructions:
        "1. In a blender, combine all the ingredients. 2. Blend until smooth. 3. Serve as a refreshing and nutritious snack."
  },
  {
    name: "Paneer Tikka",
    category: "veg",
    ingredients: [
        "250g paneer, cubed", 
        "1 onion, finely chopped",
        "2 tomatoes, pureed",
        "1/4 cup cream",
        "1 tsp ginger-garlic paste",
        "1 tsp garam masala",
        "Salt to taste",
        "Fresh coriander for garnish",
    ],
    instructions:
        "1. In a bowl, mix yogurt, ginger-garlic paste, garam masala, and salt to create the marinade. 2. Add the paneer cubes and chopped onions to the marinade, ensuring they are well coated. 3. Cover and refrigerate for at least 30 minutes. 4. Preheat the oven to 220°C (425°F). 5. Place the marinated paneer on skewers or a baking sheet lined with parchment paper. 6. Bake for about 15-20 minutes until the paneer is golden and slightly charred. 7. Garnish with fresh coriander and serve hot with mint chutney."
  },
  {
    name: "Veg Biryani",
    category: "Biryani",
    ingredients: [
        "2 cups basmati rice",
        "1 cup mixed vegetables (carrots, peas, beans)",
        "2 eggs, beaten",
        "1/2 cup yogurt",
        "1/4 cup oil",
        "1 tsp cumin seeds",
        "Salt to taste",
        "1/2 cup chopped onions",
        "1/4 cup chopped tomatoes",
        "1/4 cup chopped green peppers",
        "1/4 cup chopped bell peppers",
    ],
    instructions:
        "1. Rinse the basmati rice under cold water until the water runs clear, then soak it in water for 30 minutes. 2. In a large pot, heat oil and sauté cumin seeds until fragrant. 3. Add chopped onions and cook until golden brown. 4. Stir in chopped tomatoes, green peppers, and bell peppers; cook until softened. 5. Add mixed vegetables and cook for another 5 minutes. 6. Drain the soaked rice and add it to the pot along with enough water to cover the rice (about 4 cups). 7. Bring to a boil, then reduce heat to low, cover, and simmer for about 20-25 minutes until the rice is cooked and the liquid is absorbed. 8. Fluff the biryani with a fork and serve hot with raita or salad."
  },
  {
    name: "Chicken Shawarma",
    category: "non-veg",
    ingredients: [
        "500g boneless chicken thighs",
        "1/4 cup olive oil",
        "1/4 cup lemon juice",
        "1/2 tsp cumin seeds",
        "Salt to taste",
        "1/4 cup chopped onions",
        "1/4 cup chopped tomatoes",
        "1/4 cup chopped green peppers",
        "1/4 cup chopped bell peppers",
    ],
    instructions:
        "1. In a bowl, mix olive oil, lemon juice, cumin seeds, and salt to create the marinade. 2. Add the boneless chicken thighs to the marinade and let it sit for at least 30 minutes. 3. Preheat a grill or skillet over medium heat. 4. Cook the marinated chicken for about 6-7 minutes on each side until cooked through and caramelized. 5. Remove from heat and let it rest for a few minutes before slicing thinly. 6. Serve in pita bread with chopped onions, tomatoes, green peppers, and bell peppers."
  },
  {
    name: "Blueberry Muffins",
    category: "Snacks",
    ingredients: [
        "1 1/2 cups all-purpose flour",
        "1/2 cup sugar",
        "1/2 tsp baking powder",
        "1/2 tsp baking soda",
        "1/2 tsp salt", 
        "1/2 cup milk",
        "1/4 cup vegetable oil",
        "2 eggs",
    ],
    instructions:
        "1. Preheat the oven to 375°F (190°C). Grease a muffin tin or line with paper liners. 2. In a large bowl, whisk together flour, sugar, baking powder, baking soda, and salt. 3. In another bowl, mix milk, vegetable oil, and eggs until well combined. 4. Pour the wet ingredients into the dry ingredients and stir until just combined (do not overmix). 5. Gently fold in fresh or frozen blueberries. 6. Divide the batter evenly among the muffin cups. 7. Bake for about 20-25 minutes until golden brown and a toothpick inserted in the center comes out clean. 8. Let cool before serving."
  },
  {
    name: "Mango Lassi",
    category: "Juices",
    ingredients: [
        "1 cup yogurt",
        "1/2 cup mango pulp (fresh or canned)",
        "1/2 cup milk",
        "2 tbsp sugar (adjust to taste)",
        "1/4 tsp cardamom powder",
        "Ice cubes (optional)"
    ],
    instructions:
        "1. In a blender, combine yogurt, mango pulp, milk, sugar, and cardamom powder. 2. Blend until smooth and creamy. 3. If desired, add ice cubes and blend again until frothy. 4. Pour into glasses and serve chilled as a refreshing drink."
  },
  {
    name: "Vegetable Samosa",
    category: "Snacks",
    ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup water",
        "1/2 tsp salt", 
        "1/2 tsp baking powder",
        "1/2 tsp baking soda",
        "1/4 cup oil",
        "1/4 cup chopped onions",
        "1/4 cup chopped tomatoes",
        "1/4 cup chopped green peppers",
        "1/4 cup chopped bell peppers",
        "1/4 cup chopped carrots",
    ],
    instructions:
        "1. In a bowl, mix all-purpose flour, salt, baking powder, and baking soda. 2. Gradually add water and knead to form a smooth dough. Cover and let it rest for 30 minutes. 3. In a skillet, heat oil and sauté chopped onions until golden brown. 4. Add chopped tomatoes, green peppers, bell peppers, and carrots; cook until softened. 5. Roll out the dough into small circles, fill with the vegetable mixture, and fold into a triangle shape. 6. Deep fry in hot oil until golden brown and crispy. 7. Serve hot with mint chutney or tamarind sauce."
  },
  {
    name: "Lamb Curry", category: "non-veg",
    ingredients: [
        "500g lamb, cut into cubes",
        "1 onion, finely chopped",
        "2 tomatoes, pureed",
        "1/4 cup yogurt",
        "2 tbsp curry powder",
        "1 tsp ginger-garlic paste",
        "Salt to taste",
        "Fresh coriander for garnish"
    ],
    instructions:
        "1. In a large pot, heat oil and sauté the chopped onion until golden brown. 2. Add ginger-garlic paste and cook for another minute. 3. Stir in the tomato puree and cook until the oil separates from the mixture. 4. Add curry powder and salt; mix well. 5. Add the lamb cubes and cook until browned on all sides. 6. Stir in yogurt and enough water to cover the lamb; bring to a boil. 7. Reduce heat, cover, and simmer for about 1 hour or until the lamb is tender. 8. Garnish with fresh coriander and serve hot with rice or naan."
  },
  {
    name: "Pumpkin Soup", category: "veg",
    ingredients: [
        "1 small pumpkin, peeled and diced",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "4 cups vegetable broth",
        "1/2 cup cream",
        "Salt and pepper to taste",
        "Fresh parsley for garnish"
    ],
    instructions:
        "1. In a large pot, sauté chopped onion and minced garlic until translucent. 2. Add diced pumpkin and cook for about 5 minutes. 3. Pour in vegetable broth and bring to a boil. 4. Reduce heat and simmer until the pumpkin is tender, about 20-25 minutes. 5. Use an immersion blender to puree the soup until smooth. 6. Stir in cream, season with salt and pepper, and heat through. 7. Garnish with fresh parsley before serving hot."
  },
  {
    name: "Fish Curry", category: "non-veg",
    ingredients: [
        "500g fish fillets (like tilapia or cod)",
        "1 onion, finely chopped",
        "2 tomatoes, pureed",
        "1/4 cup coconut milk",
        "1 tsp ginger-garlic paste",
        "1 tsp turmeric powder",
        "1 tsp red chili powder",
        "Salt to taste",
        "Fresh coriander for garnish"
    ],
    instructions:
        "1. In a pan, heat oil and sauté the chopped onion until golden brown. 2. Add ginger-garlic paste and cook for another minute. 3. Stir in the tomato puree, turmeric powder, red chili powder, and salt; cook until the oil separates from the mixture. 4. Gently add the fish fillets and cook for about 5-7 minutes until the fish is cooked through. 5. Pour in coconut milk and simmer for another 2-3 minutes. 6. Garnish with fresh coriander and serve hot with rice or naan."
  },
  {
    name: "Strawberry Shortcake", category: "cakes",
    ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup sugar",
        "1/2 cup unsalted butter, softened",
        "1/2 cup milk",
        "1 egg",
        "1 tsp baking powder",
        "1/2 tsp salt",
        "2 cups fresh strawberries, sliced",
        "Whipped cream for serving"
    ],
    instructions:
        "1. Preheat the oven to 350°F (175°C). Grease and flour an 8-inch round cake pan. 2. In a large bowl, cream together softened butter and sugar until light and fluffy. 3. Beat in the egg, then stir in milk. 4. In another bowl, whisk together flour, baking powder, and salt; gradually add to the wet mixture until just combined. 5. Pour the batter into the prepared pan and bake for about 25-30 minutes or until a toothpick inserted in the center comes out clean. 6. Let it cool before slicing into layers. 7. Layer with sliced strawberries and whipped cream between the cake layers and on top. Serve chilled."
  },
  {
    name: "Lemonade", category: "juices",
    ingredients: [
        "1 cup fresh lemon juice",
        "1 cup sugar",
        "4 cups water",
        "Ice cubes",
        "Lemon slices for garnish"
    ],
    instructions:
        "1. In a pitcher, combine fresh lemon juice and sugar; stir until the sugar is dissolved. 2. Add water and mix well. 3. Chill in the refrigerator for at least 30 minutes. 4. Serve over ice cubes and garnish with lemon slices."
  },
  {
    name: "Masala Dosa", category: "tiffin",
    ingredients: [
        "1 cup rice",
        "1/4 cup urad dal (split black gram)",
        "1/4 tsp fenugreek seeds",
        "Salt to taste",
        "Oil for cooking",
        "1 potato, boiled and mashed",
        "1 onion, finely chopped",
        "1 green chili, chopped",
        "Fresh coriander for garnish"
    ],
    instructions:
        "1. Soak rice, urad dal, and fenugreek seeds in water for 4-6 hours. Drain and blend into a smooth batter, adding water as needed. 2. Ferment the batter overnight or for at least 8 hours. 3. Heat a non-stick skillet and pour a ladleful of batter, spreading it into a thin circle. Drizzle with oil and cook until golden brown on one side. 4. In a bowl, mix mashed potato, chopped onion, green chili, and salt. Place a spoonful of this mixture on one half of the dosa and fold it over. 5. Garnish with fresh coriander and serve hot with coconut chutney and sambar."
  },
  {
    name: "Chicken Wings", category: "non-veg",
    ingredients: [
        "1 kg chicken wings",
        "1/4 cup soy sauce",
        "1/4 cup honey",
        "2 cloves garlic, minced",
        "1 tsp ginger, grated",
        "Salt and pepper to taste",
        "Sesame seeds for garnish"
    ],
    instructions:
        "1. In a bowl, mix soy sauce, honey, minced garlic, grated ginger, salt, and pepper to create the marinade. 2. Add the chicken wings to the marinade and let it sit for at least 30 minutes. 3. Preheat the oven to 200°C (400°F). 4. Place the marinated wings on a baking sheet lined with parchment paper. 5. Bake for about 30-35 minutes until the wings are cooked through and caramelized, flipping halfway through. 6. Garnish with sesame seeds before serving hot."
  },
  {
    name: "Chocolate Brownies", category: "cakes",
    ingredients: [
        "1/2 cup unsalted butter",
        "1 cup sugar",
        "2 large eggs",
        "1 tsp vanilla extract",
        "1/3 cup unsweetened cocoa powder",
        "1/2 cup all-purpose flour",
        "1/4 tsp salt",
        "1/4 tsp baking powder"
    ],
    instructions:
        "1. Preheat the oven to 350°F (175°C). Grease a 9x9-inch baking pan. 2. In a saucepan, melt butter over low heat. Remove from heat and stir in sugar, eggs, and vanilla extract until well combined. 3. In another bowl, whisk together cocoa powder, flour, salt, and baking powder. Gradually add the dry ingredients to the wet mixture until just combined. 4. Pour the batter into the prepared baking pan and spread evenly. 5. Bake for about 20-25 minutes or until a toothpick inserted in the center comes out with a few moist crumbs. 6. Let it cool before cutting into squares and serving."
  },
  {
    name: "Tomato Bruschetta", category: "tiffin",
    ingredients: [
        "1 baguette, sliced",
        "2 cups diced tomatoes",
        "1/4 cup fresh basil, chopped",
        "2 cloves garlic, minced",
        "1/4 cup olive oil",
        "Salt and pepper to taste",
        "Balsamic glaze for drizzling"
    ],
    instructions:
        "1. Preheat the oven to 200°C (400°F). 2. Arrange the baguette slices on a baking sheet and brush with olive oil. 3. Toast in the oven for about 5-7 minutes until golden brown. 4. In a bowl, combine diced tomatoes, chopped basil, minced garlic, salt, and pepper. 5. Spoon the tomato mixture onto each toasted baguette slice. 6. Drizzle with balsamic glaze before serving as a delicious appetizer."
  },
  {
    name: "Carrot Juice", category: "juices",
    ingredients: [
        "4 large carrots, peeled and chopped",
        "1 apple, cored and chopped",
        "1 inch ginger, peeled",
        "1/2 lemon, juiced",
        "1 cup water",
        "Ice cubes (optional)"
    ],
    instructions:
        "1. In a blender, combine chopped carrots, apple, ginger, lemon juice, and water. 2. Blend until smooth. 3. Strain the mixture through a fine mesh sieve or cheesecloth to remove pulp if desired. 4. Serve over ice cubes for a refreshing drink."
  },
  {
    name: "Palak Paneer", category: "veg",
    ingredients: [
        "250g paneer, cubed",
        "2 cups spinach leaves, blanched",
        "1 onion, finely chopped",
        "2 tomatoes, pureed",
        "1/4 cup cream",
        "1 tsp ginger-garlic paste",
        "1 tsp garam masala",
        "Salt to taste",
        "Fresh coriander for garnish"
    ],
    instructions:
        "1. In a pan, heat oil and sauté the chopped onion until golden brown. 2. Add ginger-garlic paste and cook for another minute. 3. Stir in the tomato puree and cook until the oil separates from the mixture. 4. Add garam masala and salt; mix well. 5. Blend the blanched spinach leaves into a smooth paste and add it to the pan; cook for about 5 minutes. 6. Gently add the cubed paneer and cook for another 2-3 minutes. 7. Stir in the cream and garnish with fresh coriander before serving hot with naan or rice."
  },
  {
    name: "Beef Stroganoff", category: "non-veg",
    ingredients: [
        "500g beef sirloin, thinly sliced",
        "1 onion, finely chopped",
        "2 cups mushrooms, sliced",
        "1/2 cup sour cream",
        "1/4 cup beef broth",
        "2 tbsp flour",
        "2 tbsp butter",
        "Salt and pepper to taste",
        "Fresh parsley for garnish"
    ],
    instructions:
        "1. In a skillet, melt butter over medium heat and sauté the chopped onion until translucent. 2. Add sliced mushrooms and cook until browned. 3. Push the vegetables to one side of the skillet and add the beef slices; cook until browned on all sides. 4. Sprinkle flour over the beef and stir to coat evenly. 5. Pour in beef broth and bring to a simmer; cook for about 5 minutes until the sauce thickens. 6. Stir in sour cream, season with salt and pepper, and heat through without boiling. 7. Garnish with fresh parsley before serving hot over egg noodles or rice."
  },
  {
    name: "Vanilla Cupcakes", category: "cakes",
    ingredients: [
        "1 1/2 cups all-purpose flour",
        "1 cup sugar",
        "1/2 cup unsalted butter, softened",
        "2 large eggs",
        "1/2 cup milk",
        "2 tsp baking powder",
        "1 tsp vanilla extract",
        "1/4 tsp salt"
    ],
    instructions:
        "1. Preheat the oven to 350°F (175°C). Line a muffin tin with paper liners. 2. In a large bowl, cream together softened butter and sugar until light and fluffy. 3. Beat in the eggs one at a time, then stir in vanilla extract. 4. In another bowl, whisk together flour, baking powder, and salt; gradually add to the wet mixture, alternating with milk, until just combined. 5. Divide the batter evenly among the muffin cups. 6. Bake for about 18-20 minutes or until a toothpick inserted in the center comes out clean. 7. Let cool before frosting with your favorite icing."
  },
  {
    name: "Guacamole", category: "tiffin",
    ingredients: [
        "2 ripe avocados, peeled and pitted",
        "1 small onion, finely chopped",
        "1 tomato, diced",
        "1 lime, juiced",
        "1 clove garlic, minced",
        "Salt and pepper to taste",
        "Fresh cilantro for garnish"
    ],
    instructions:
        "1. In a bowl, mash the avocados with a fork until smooth but still chunky. 2. Stir in chopped onion, diced tomato, lime juice, minced garlic, salt, and pepper until well combined. 3. Garnish with fresh cilantro before serving with tortilla chips or as a topping for tacos."
  },
  {
    name: "Idli", category: "tiffin",
    ingredients: [
        "1 cup rice",
        "1/4 cup urad dal (split black gram)",
        "1/4 tsp fenugreek seeds",
        "Salt to taste",
        "Water as needed"
    ],
    instructions:
        "1. Soak rice, urad dal, and fenugreek seeds in water for 4-6 hours. Drain and blend into a smooth batter, adding water as needed. 2. Ferment the batter overnight or for at least 8 hours. 3. Grease idli molds and pour the batter into each mold, filling them halfway. 4. Steam the idlis in a steamer or pressure cooker for about 10-12 minutes until cooked through. 5. Let them cool slightly before removing from the molds. Serve hot with coconut chutney and sambar."
  },
  {
    name: "Vada", category: "tiffin",
    ingredients: [
        "1 cup urad dal (split black gram), soaked for 4 hours",
        "1 small onion, finely chopped",
        "2 green chilies, chopped",
        "1 tsp cumin seeds",
        "Salt to taste",
        "Oil for frying"
    ],
    instructions:
        "1. Drain the soaked urad dal and blend it into a smooth batter, adding a little water if necessary. 2. In a bowl, mix the batter with chopped onion, green chilies, cumin seeds, and salt until well combined. 3. Heat oil in a deep frying pan over medium heat. 4. Take small portions of the batter and shape them into round patties or doughnuts. 5. Fry the vadas in hot oil until golden brown on both sides. 6. Remove and drain on paper towels before serving hot with coconut chutney or sambar."
  },
  {
    name: "Uttapam", category: "tiffin",
    ingredients: [
        "1 cup rice flour",
        "1/4 cup urad dal flour",
        "1/4 tsp fenugreek seeds",
        "Salt to taste",
        "Water as needed",
        "1/2 cup mixed vegetables (onion, tomato, bell pepper, etc.)",
        "Oil for cooking"
    ],
    instructions:
        "1. In a bowl, mix rice flour, urad dal flour, fenugreek seeds, and salt. Gradually add water to form a smooth batter. 2. Let the batter rest for about 30 minutes. 3. Heat a non-stick skillet and pour a ladleful of batter, spreading it into a thick circle. 4. Sprinkle mixed vegetables on top and drizzle with oil. 5. Cook until the bottom is golden brown, then flip and cook the other side until done. 6. Serve hot with coconut chutney or sambar."
  },
  {
    name: "Upma", category: "tiffin",
    ingredients: [
        "1 cup semolina (rava)",
        "1/2 cup mixed vegetables (carrots, peas, beans)",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1 tsp mustard seeds",
        "1 tsp cumin seeds",
        "Salt to taste",
        "2 cups water",
        "Oil for cooking",
        "Fresh coriander for garnish"
    ],
    instructions:
        "1. In a pan, heat oil and add mustard seeds and cumin seeds; let them splutter. 2. Add chopped onion and green chilies; sauté until the onion is translucent. 3. Stir in mixed vegetables and cook for a few minutes until they are tender. 4. Add semolina and roast for about 5 minutes until it turns light golden brown. 5. Pour in water, season with salt, and bring to a boil. 6. Reduce heat, cover, and simmer until the water is absorbed and the upma is cooked through. 7. Garnish with fresh coriander before serving hot."
  },
  {
    name: "Pongal", category: "tiffin",
    ingredients: [
        "1 cup rice",
        "1/4 cup split yellow moong dal",
        "1 tsp cumin seeds",
        "1/2 tsp black pepper",
        "1/2 inch ginger, grated",
        "Salt to taste",
        "2 tbsp ghee (clarified butter)",
        "Fresh coriander for garnish"
    ],
    instructions:
        "1. In a pot, dry roast the moong dal until it turns light golden brown. 2. Add rice and enough water (about 4 cups) to the pot; bring to a boil. 3. Reduce heat, cover, and simmer until the rice and dal are cooked through and soft. 4. In a separate pan, heat ghee and add cumin seeds, black pepper, and grated ginger; sauté for a minute. 5. Pour this tempering over the cooked rice and dal mixture; season with salt. 6. Mix well and garnish with fresh coriander before serving hot."
  },
  {
    name: "Pesarattu", category: "tiffin",
    ingredients: [
        "1 cup green gram (moong dal), soaked for 4 hours",
        "1/4 cup rice, soaked for 2 hours",
        "1 green chili",
        "1/2 inch ginger",
        "Salt to taste",
        "Oil for cooking"
    ],
    instructions:
        "1. Drain the soaked green gram and rice; blend them with green chili, ginger, and salt into a smooth batter, adding water as needed. 2. Heat a non-stick skillet and pour a ladleful of batter, spreading it into a thin circle. 3. Drizzle with oil and cook until the bottom is golden brown. 4. Flip and cook the other side until done. 5. Serve hot with coconut chutney or sambar."
  },
  {
    name: "Rava Dosa", category: "tiffin",
    ingredients: [
        "1 cup semolina (rava)",
        "1/4 cup rice flour",
        "1/4 tsp cumin seeds",
        "1/4 tsp black pepper",
        "Salt to taste",
        "Water as needed",
        "Oil for cooking"
    ],
    instructions:
        "1. In a bowl, mix semolina, rice flour, cumin seeds, black pepper, and salt. Gradually add water to form a thin batter. 2. Let the batter rest for about 30 minutes. 3. Heat a non-stick skillet and pour a ladleful of batter, spreading it into a thin circle. 4. Drizzle with oil and cook until the bottom is golden brown. 5. Flip and cook the other side until done. 6. Serve hot with coconut chutney or sambar."
  },
  {
    name: "Plain Dosa", category: "tiffin",
    ingredients: [
        "1 cup rice",
        "1/4 cup urad dal (split black gram)",
        "1/4 tsp fenugreek seeds",
        "Salt to taste",
        "Water as needed",
        "Oil for cooking"
    ],
    instructions:
        "1. Soak rice, urad dal, and fenugreek seeds in water for 4-6 hours. Drain and blend into a smooth batter, adding water as needed. 2. Ferment the batter overnight or for at least 8 hours. 3. Heat a non-stick skillet and pour a ladleful of batter, spreading it into a thin circle. 4. Drizzle with oil and cook until the bottom is golden brown. 5. Flip and cook the other side until done. 6. Serve hot with coconut chutney or sambar."
  },
  {
    name: "Onion Dosa", category: "tiffin",
    ingredients: [
        "1 cup rice",
        "1/4 cup urad dal (split black gram)",
        "1/4 tsp fenugreek seeds",
        "Salt to taste",
        "Water as needed",
        "1 onion, finely chopped",
        "Oil for cooking"
    ],
    instructions:
        "1. Soak rice, urad dal, and fenugreek seeds in water for 4-6 hours. Drain and blend into a smooth batter, adding water as needed. 2. Ferment the batter overnight or for at least 8 hours. 3. Heat a non-stick skillet and pour a ladleful of batter, spreading it into a thin circle. 4. Sprinkle chopped onion on top and drizzle with oil. 5. Cook until the bottom is golden brown, then flip and cook the other side until done. 6. Serve hot with coconut chutney or sambar."
  },
  {
    name: "Tomato Bath", category: "tiffin",
    ingredients: [
        "1 cup rice",
        "2 tomatoes, chopped",
        "1 onion, finely chopped",
        "2 green chilies, slit",
        "1 tsp mustard seeds",
        "1 tsp cumin seeds",
        "Salt to taste",
        "2 cups water",
        "Oil for cooking",
        "Fresh coriander for garnish"
    ],
    instructions:
        "1. In a pot, heat oil and add mustard seeds and cumin seeds; let them splutter. 2. Add chopped onion and green chilies; sauté until the onion is translucent. 3. Stir in chopped tomatoes and cook until they soften. 4. Add rice and water; season with salt. 5. Bring to a boil, then reduce heat, cover, and simmer until the rice is cooked through and the liquid is absorbed. 6. Garnish with fresh coriander before serving hot."
  },
  {
    name: "Poha", category: "tiffin",
    ingredients: [
        "2 cups flattened rice (poha)",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1/2 tsp mustard seeds",
        "1/2 tsp turmeric powder",
        "Salt to taste",
        "Fresh coriander for garnish",
        "Oil for cooking"
    ],
    instructions:
        "1. Rinse the flattened rice in cold water and drain; set aside. 2. In a pan, heat oil and add mustard seeds; let them splutter. 3. Add chopped onion and green chilies; sauté until the onion is translucent. 4. Stir in turmeric powder and salt; mix well. 5. Add the rinsed poha to the pan and gently mix until well combined and heated through. 6. Garnish with fresh coriander before serving hot."
  },
  {
    name: "Sabudana Khichdi", category: "tiffin",
    ingredients: [
        "1 cup sabudana (tapioca pearls), soaked for 4 hours",
        "1 potato, boiled and diced",
        "2 green chilies, chopped",
        "1/2 tsp cumin seeds",
        "Salt to taste",
        "Fresh coriander for garnish",
        "Oil for cooking"
    ],
    instructions:
        "1. In a pan, heat oil and add cumin seeds; let them splutter. 2. Add chopped green chilies and sauté for a minute. 3. Stir in diced potato and cook until slightly golden. 4. Add the soaked sabudana and salt; mix well and cook until the sabudana becomes translucent, about 5-7 minutes. 5. Garnish with fresh coriander before serving hot."
  },
  {
    name: "Thepla", category: "tiffin",
    ingredients: [
        "2 cups whole wheat flour",
        "1/2 cup besan (gram flour)",
        "1/4 cup yogurt",
        "1/4 cup chopped fenugreek leaves (methi)",
        "1 tsp cumin seeds",
        "1/2 tsp turmeric powder",
        "Salt to taste",
        "Water as needed",
        "Oil for cooking"
    ],
    instructions:
        "1. In a bowl, mix whole wheat flour, besan, yogurt, chopped fenugreek leaves, cumin seeds, turmeric powder, and salt. 2. Gradually add water to form a smooth dough; let it rest for 15-20 minutes. 3. Divide the dough into small balls and roll each ball into a thin circle. 4. Heat a skillet and cook each thepla on both sides until golden brown, drizzling with oil as needed. 5. Serve hot with yogurt or pickle."
  },
  {
    name: "Aloo Paratha", category: "tiffin",
    ingredients: [
        "2 cups whole wheat flour",
        "2 potatoes, boiled and mashed",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1 tsp cumin seeds",
        "Salt to taste",
        "Water as needed",
        "Oil for cooking"
    ],
    instructions:
        "1. In a bowl, mix whole wheat flour with water to form a smooth dough; let it rest for 15-20 minutes. 2. In another bowl, combine mashed potatoes, chopped onion, green chilies, cumin seeds, and salt. 3. Divide the dough into small balls and flatten each ball; place a spoonful of the potato mixture in the center and fold the edges to seal. 4. Roll out each stuffed ball into a flat circle. 5. Heat a skillet and cook each paratha on both sides until golden brown, drizzling with oil as needed. 6. Serve hot with yogurt or pickle."
  },
  {
    name: "Vegetable Sandwich", category: "tiffin",
    ingredients: [
        "4 slices of bread",
        "1/2 cup cucumber, sliced",
        "1/2 cup tomato, sliced",
        "1/2 cup onion, sliced",
        "1/4 cup green chutney",
        "Salt and pepper to taste",
        "Butter for spreading"
    ],
    instructions:
        "1. Spread butter on one side of each bread slice. 2. On the unbuttered side, spread green chutney evenly. 3. Layer cucumber, tomato, and onion slices on two of the bread slices; season with salt and pepper. 4. Top with the remaining bread slices, buttered side up. 5. Grill or toast the sandwiches until golden brown on both sides. 6. Cut into halves or quarters and serve hot."
  },
  {
    name: "Moong Dal Chilla", category: "tiffin",
    ingredients: [
        "1 cup moong dal (split green gram), soaked for 4 hours",
        "1/4 cup rice flour",
        "1/2 tsp cumin seeds",
        "1/2 tsp turmeric powder",
        "Salt to taste",
        "Water as needed",
        "Oil for cooking",
        "Chopped coriander for garnish"
    ],
    instructions:
        "1. Drain the soaked moong dal and blend it into a smooth batter, adding water as needed. 2. In a bowl, mix the moong dal batter with rice flour, cumin seeds, turmeric powder, and salt until well combined. 3. Heat a non-stick skillet and pour a ladleful of batter, spreading it into a thin circle. 4. Drizzle with oil and cook until the bottom is golden brown. 5. Flip and cook the other side until done. 6. Garnish with chopped coriander before serving hot with chutney."
  },
  {
    name: "Roti Sabzi Roll", category: "tiffin",
    ingredients: [
        "2 whole wheat rotis",
        "1 cup mixed vegetables (carrot, peas, bell pepper), sautéed",
        "1/4 cup yogurt",
        "1/4 tsp cumin powder",
        "Salt to taste",
        "Fresh coriander for garnish"
    ],
    instructions:
        "1. Take one roti and spread yogurt evenly over it. 2. Sprinkle cumin powder and salt on top of the yogurt. 3. Place a portion of sautéed mixed vegetables in the center of the roti. 4. Roll the roti tightly, tucking in the sides as you go. 5. Repeat with the second roti. 6. Cut each roll into halves or quarters and garnish with fresh coriander before serving."
  },
  {
    name: "Dhokla", category: "tiffin",
    ingredients: [
        "1 cup gram flour (besan)",
        "1/2 cup yogurt",
        "1/2 tsp turmeric powder",
        "1 tsp ginger paste",
        "1 tsp green chili paste",
        "1 tsp sugar",
        "Salt to taste",
        "1 tsp baking soda",
        "Water as needed",
        "Oil for greasing",
        "Mustard seeds and chopped coriander for tempering"
    ],
    instructions:
        "1. In a bowl, mix gram flour, yogurt, turmeric powder, ginger paste, green chili paste, sugar, and salt. Gradually add water to form a smooth batter. 2. Let the batter rest for about 30 minutes. 3. Add baking soda to the batter and mix well. 4. Grease a steaming tray or plate with oil and pour the batter into it. 5. Steam for about 15-20 minutes until a toothpick inserted comes out clean. 6. Let it cool slightly before cutting into squares. 7. For tempering, heat oil in a pan, add mustard seeds, and let them splutter; pour this over the dhokla and garnish with chopped coriander before serving."
  },
  {
    name: "Mini Uttapam", category: "tiffin",
    ingredients: [
        "1 cup rice flour",
        "1/4 cup urad dal flour",
        "1/4 tsp fenugreek seeds",
        "Salt to taste",
        "Water as needed",
        "1/2 cup mixed vegetables (onion, tomato, bell pepper, etc.)",
        "Oil for cooking"
    ],
    instructions:
        "1. In a bowl, mix rice flour, urad dal flour, fenugreek seeds, and salt. Gradually add water to form a smooth batter. 2. Let the batter rest for about 30 minutes. 3. Heat a non-stick skillet and pour a ladleful of batter, spreading it into a small circle. 4. Sprinkle mixed vegetables on top and drizzle with oil. 5. Cook until the bottom is golden brown, then flip and cook the other side until done. 6. Serve hot with coconut chutney or sambar."
  },
  {
    name: "Hyderabadi Chicken Biryani", category: "biryani",
    ingredients: [
        "500g chicken, cut into pieces",
        "2 cups basmati rice",
        "1 large onion, thinly sliced",
        "2 tomatoes, chopped",
        "1/4 cup yogurt",
        "2 green chilies, slit",
        "1 tsp ginger-garlic paste",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped coriander leaves",
        "2-3 whole cloves",
        "2-3 cardamom pods",
        "1 bay leaf",
        "1 stick cinnamon",
        "Salt to taste",
        "Oil for cooking"
    ],
    instructions:
        "1. Rinse the basmati rice in cold water until the water runs clear; soak for 30 minutes. 2. In a large pot, heat oil and fry the sliced onions until golden brown; remove half for garnishing. 3. In the same pot, add ginger-garlic paste, green chilies, and chopped tomatoes; cook until the tomatoes soften. 4. Add chicken pieces, yogurt, mint leaves, coriander leaves, and whole spices (cloves, cardamom, bay leaf, cinnamon); cook until the chicken is browned and cooked through. 5. Drain the soaked rice and layer it over the chicken mixture; add enough water to cover the rice and season with salt. 6. Cover and cook on low heat until the rice is fully cooked and fluffy, about 20-25 minutes. 7. Garnish with fried onions before serving hot."
  },
  {
    name: "Hyderabadi Mutton Biryani", category: "biryani",
    ingredients: [
        "500g mutton, cut into pieces",
        "2 cups basmati rice",
        "1 large onion, thinly sliced",
        "2 tomatoes, chopped",
        "1/4 cup yogurt",
        "2 green chilies, slit",
        "1 tsp ginger-garlic paste",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped coriander leaves",
        "2-3 whole cloves",
        "2-3 cardamom pods",
        "1 bay leaf",
        "1 stick cinnamon",
        "Salt to taste",
        "Oil for cooking"
    ],
    instructions:
        "1. Rinse the basmati rice in cold water until the water runs clear; soak for 30 minutes. 2. In a large pot, heat oil and fry the sliced onions until golden brown; remove half for garnishing. 3. In the same pot, add ginger-garlic paste, green chilies, and chopped tomatoes; cook until the tomatoes soften. 4. Add mutton pieces, yogurt, mint leaves, coriander leaves, and whole spices (cloves, cardamom, bay leaf, cinnamon); cook until the mutton is browned and tender. 5. Drain the soaked rice and layer it over the mutton mixture; add enough water to cover the rice and season with salt. 6. Cover and cook on low heat until the rice is fully cooked and fluffy, about 30-35 minutes. 7. Garnish with fried onions before serving hot."
  },
  {
    name: "Veg Dum Biryani", category: "biryani",
    ingredients: [
        "2 cups basmati rice",
        "1 cup mixed vegetables (carrot, peas, beans, potato)",
        "1 large onion, thinly sliced",
        "2 tomatoes, chopped",
        "1/4 cup yogurt",
        "2 green chilies, slit",
        "1 tsp ginger-garlic paste",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped coriander leaves",
        "2-3 whole cloves",
        "2-3 cardamom pods",
        "1 bay leaf",
        "1 stick cinnamon",
        "Salt to taste",
        "Oil for cooking"
    ],
    instructions:
        "1. Rinse the basmati rice in cold water until the water runs clear; soak for 30 minutes. 2. In a large pot, heat oil and fry the sliced onions until golden brown; remove half for garnishing. 3. In the same pot, add ginger-garlic paste, green chilies, and chopped tomatoes; cook until the tomatoes soften. 4. Add mixed vegetables, yogurt, mint leaves, coriander leaves, and whole spices (cloves, cardamom, bay leaf, cinnamon); cook until the vegetables are tender. 5. Drain the soaked rice and layer it over the vegetable mixture; add enough water to cover the rice and season with salt. 6. Cover and cook on low heat until the rice is fully cooked and fluffy, about 20-25 minutes. 7. Garnish with fried onions before serving hot."
  },
  {
    name: "Egg Biryani", category: "biryani",
    ingredients: [
        "2 cups basmati rice",
        "4 hard-boiled eggs, halved",
        "1 large onion, thinly sliced",
        "2 tomatoes, chopped",
        "1/4 cup yogurt",
        "2 green chilies, slit",
        "1 tsp ginger-garlic paste",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped coriander leaves",
        "2-3 whole cloves",
        "2-3 cardamom pods",
        "1 bay leaf",
        "1 stick cinnamon",
        "Salt to taste",
        "Oil for cooking"
    ],
    instructions:
        "1. Rinse the basmati rice in cold water until the water runs clear; soak for 30 minutes. 2. In a large pot, heat oil and fry the sliced onions until golden brown; remove half for garnishing. 3. In the same pot, add ginger-garlic paste, green chilies, and chopped tomatoes; cook until the tomatoes soften. 4. Add yogurt, mint leaves, coriander leaves, and whole spices (cloves, cardamom, bay leaf, cinnamon); cook until well combined. 5. Drain the soaked rice and layer it over the mixture; add enough water to cover the rice and season with salt. 6. Gently place the halved boiled eggs on top of the rice. 7. Cover and cook on low heat until the rice is fully cooked and fluffy, about 20-25 minutes. 8. Garnish with fried onions before serving hot."
  },
  {
    name: "Paneer Biryani", category: "biryani",
    ingredients: [
        "2 cups basmati rice",
        "250g paneer, cubed",
        "1 large onion, thinly sliced",
        "2 tomatoes, chopped",
        "1/4 cup yogurt",
        "2 green chilies, slit",
        "1 tsp ginger-garlic paste",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped coriander leaves",
        "2-3 whole cloves",
        "2-3 cardamom pods",
        "1 bay leaf",
        "1 stick cinnamon",
        "Salt to taste",
        "Oil for cooking"
    ],
    instructions:
        "1. Rinse the basmati rice in cold water until the water runs clear; soak for 30 minutes. 2. In a large pot, heat oil and fry the sliced onions until golden brown; remove half for garnishing. 3. In the same pot, add ginger-garlic paste, green chilies, and chopped tomatoes; cook until the tomatoes soften. 4. Add yogurt, mint leaves, coriander leaves, and whole spices (cloves, cardamom, bay leaf, cinnamon); cook until well combined. 5. Gently add the cubed paneer and mix well. 6. Drain the soaked rice and layer it over the mixture; add enough water to cover the rice and season with salt. 7. Cover and cook on low heat until the rice is fully cooked and fluffy, about 20-25 minutes. 8. Garnish with fried onions before serving hot."
  },
  {
    name: "Prawns Biryani", category: "biryani",
    ingredients: [
        "2 cups basmati rice",
        "500g prawns, cleaned and deveined",
        "1 large onion, thinly sliced",
        "2 tomatoes, chopped",
        "1/4 cup yogurt",
        "2 green chilies, slit",
        "1 tsp ginger-garlic paste",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped coriander leaves",
        "2-3 whole cloves",
        "2-3 cardamom pods",
        "1 bay leaf",
        "1 stick cinnamon",
        "Salt to taste",
        "Oil for cooking"
    ],
    instructions:
        "1. Rinse the basmati rice in cold water until the water runs clear; soak for 30 minutes. 2. In a large pot, heat oil and fry the sliced onions until golden brown; remove half for garnishing. 3. In the same pot, add ginger-garlic paste, green chilies, and chopped tomatoes; cook until the tomatoes soften. 4. Add prawns, yogurt, mint leaves, coriander leaves, and whole spices (cloves, cardamom, bay leaf, cinnamon); cook until the prawns are cooked through. 5. Drain the soaked rice and layer it over the mixture; add enough water to cover the rice and season with salt. 6. Cover and cook on low heat until the rice is fully cooked and fluffy, about 20-25 minutes. 7. Garnish with fried onions before serving hot."
  },
  {
    name: "Ambur Chicken Biryani", category: "biryani",
    ingredients: [
        "500g chicken, cut into pieces",
        "2 cups seeraga samba rice (or basmati rice)",
        "1 large onion, thinly sliced",
        "2 tomatoes, chopped",
        "1/4 cup yogurt",
        "2 green chilies, slit",
        "1 tsp ginger-garlic paste",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped coriander leaves",
        "2-3 whole cloves",
        "2-3 cardamom pods",
        "1 bay leaf",
        "1 stick cinnamon",
        "Salt to taste",
        "Oil for cooking"
    ],
    instructions:
        "1. Rinse the seeraga samba rice in cold water until the water runs clear; soak for 30 minutes. 2. In a large pot, heat oil and fry the sliced onions until golden brown; remove half for garnishing. 3. In the same pot, add ginger-garlic paste, green chilies, and chopped tomatoes; cook until the tomatoes soften. 4. Add chicken pieces, yogurt, mint leaves, coriander leaves, and whole spices (cloves, cardamom, bay leaf, cinnamon); cook until the chicken is browned and cooked through. 5. Drain the soaked rice and layer it over the chicken mixture; add enough water to cover the rice and season with salt. 6. Cover and cook on low heat until the rice is fully cooked and fluffy, about 20-25 minutes. 7. Garnish with fried onions before serving hot."
  },
  {
    name: "Sindhi Biryani", category: "biryani",
    ingredients: [
        "500g mutton or chicken, cut into pieces",
        "2 cups basmati rice",
        "1 large onion, thinly sliced",
        "2 tomatoes, chopped",
        "1/4 cup yogurt",
        "2 green chilies, slit",
        "1 tsp ginger-garlic paste",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped coriander leaves",
        "2-3 whole cloves",
        "2-3 cardamom pods",
        "1 bay leaf",
        "1 stick cinnamon",
        "Salt to taste",
        "Oil for cooking"
    ],
    instructions:
        "1. Rinse the basmati rice in cold water until the water runs clear; soak for 30 minutes. 2. In a large pot, heat oil and fry the sliced onions until golden brown; remove half for garnishing. 3. In the same pot, add ginger-garlic paste, green chilies, and chopped tomatoes; cook until the tomatoes soften. 4. Add mutton or chicken pieces, yogurt, mint leaves, coriander leaves, and whole spices (cloves, cardamom, bay leaf, cinnamon); cook until the meat is browned and cooked through. 5. Drain the soaked rice and layer it over the meat mixture; add enough water to cover the rice and season with salt. 6. Cover and cook on low heat until the rice is fully cooked and fluffy, about 30-35 minutes. 7. Garnish with fried onions before serving hot."
  },
  {
    name: "Mughlai Biryani", category: "biryani",
    ingredients: [
        "500g chicken or mutton, cut into pieces",
        "2 cups basmati rice",
        "1 large onion, thinly sliced",
        "2 tomatoes, chopped",
        "1/4 cup yogurt",
        "2 green chilies, slit",
        "1 tsp ginger-garlic paste",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped coriander leaves",
        "2-3 whole cloves",
        "2-3 cardamom pods",
        "1 bay leaf",
        "1 stick cinnamon",
        "Salt to taste",
        "Oil for cooking"
    ],
    instructions:
        "1. Rinse the basmati rice in cold water until the water runs clear; soak for 30 minutes. 2. In a large pot, heat oil and fry the sliced onions until golden brown; remove half for garnishing. 3. In the same pot, add ginger-garlic paste, green chilies, and chopped tomatoes; cook until the tomatoes soften. 4. Add chicken or mutton pieces, yogurt, mint leaves, coriander leaves, and whole spices (cloves, cardamom, bay leaf, cinnamon); cook until the meat is browned and cooked through. 5. Drain the soaked rice and layer it over the meat mixture; add enough water to cover the rice and season with salt. 6. Cover and cook on low heat until the rice is fully cooked and fluffy, about 30-35 minutes. 7. Garnish with fried onions before serving hot."
  },
  {
    name: "Fish Biryani", category: "biryani",
    ingredients: [
        "500g fish fillets (like kingfish or salmon), cut into pieces",
        "2 cups basmati rice",
        "1 large onion, thinly sliced",
        "2 tomatoes, chopped",
        "1/4 cup yogurt",
        "2 green chilies, slit",
        "1 tsp ginger-garlic paste",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped coriander leaves",
        "2-3 whole cloves",
        "2-3 cardamom pods",
        "1 bay leaf",
        "1 stick cinnamon",
        "Salt to taste",
        "Oil for cooking"
    ],
    instructions:
        "1. Rinse the basmati rice in cold water until the water runs clear; soak for 30 minutes. 2. In a large pot, heat oil and fry the sliced onions until golden brown; remove half for garnishing. 3. In the same pot, add ginger-garlic paste, green chilies, and chopped tomatoes; cook until the tomatoes soften. 4. Add fish pieces, yogurt, mint leaves, coriander leaves, and whole spices (cloves, cardamom, bay leaf, cinnamon); cook until the fish is cooked through. 5. Drain the soaked rice and layer it over the fish mixture; add enough water to cover the rice and season with salt. 6. Cover and cook on low heat until the rice is fully cooked and fluffy, about 20-25 minutes. 7. Garnish with fried onions before serving hot."
  },
  {
    name: "Keema Biryani", category: "biryani",
    ingredients: [
        "500g minced meat (mutton or chicken)",
        "2 cups basmati rice",
        "1 large onion, thinly sliced",
        "2 tomatoes, chopped",
        "1/4 cup yogurt",
        "2 green chilies, slit",
        "1 tsp ginger-garlic paste",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped coriander leaves",
        "2-3 whole cloves",
        "2-3 cardamom pods",
        "1 bay leaf",
        "1 stick cinnamon",
        "Salt to taste",
        "Oil for cooking"
    ],
    instructions:
        "1. Rinse the basmati rice in cold water until the water runs clear; soak for 30 minutes. 2. In a large pot, heat oil and fry the sliced onions until golden brown; remove half for garnishing. 3. In the same pot, add ginger-garlic paste, green chilies, and chopped tomatoes; cook until the tomatoes soften. 4. Add minced meat, yogurt, mint leaves, coriander leaves, and whole spices (cloves, cardamom, bay leaf, cinnamon); cook until the meat is browned and cooked through. 5. Drain the soaked rice and layer it over the keema mixture; add enough water to cover the rice and season with salt. 6. Cover and cook on low heat until the rice is fully cooked and fluffy, about 20-25 minutes. 7. Garnish with fried onions before serving hot."
  },
  {
    name: "Kuska Biryani (Plain)", category: "biryani",
    ingredients: [
        "2 cups basmati rice",
        "1 large onion, thinly sliced",
        "2 tomatoes, chopped",
        "1/4 cup yogurt",
        "2 green chilies, slit",
        "1 tsp ginger-garlic paste",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped coriander leaves",
        "2-3 whole cloves",
        "2-3 cardamom pods",
        "1 bay leaf",
        "1 stick cinnamon",
        "Salt to taste",
        "Oil for cooking"
    ],
    instructions:
        "1. Rinse the basmati rice in cold water until the water runs clear; soak for 30 minutes. 2. In a large pot, heat oil and fry the sliced onions until golden brown; remove half for garnishing. 3. In the same pot, add ginger-garlic paste, green chilies, and chopped tomatoes; cook until the tomatoes soften. 4. Add yogurt, mint leaves, coriander leaves, and whole spices (cloves, cardamom, bay leaf, cinnamon); cook until well combined. 5. Drain the soaked rice and layer it over the mixture; add enough water to cover the rice and season with salt. 6. Cover and cook on low heat until the rice is fully cooked and fluffy, about 20-25 minutes. 7. Garnish with fried onions before serving hot."
  },
  {
    name: "Red Velvet Cake", category: "cakes",
    ingredients: [
        "250g butter",
        "1 cup sugar",
        "2 eggs",
        "1 cup flour",
        "1 tsp vanilla extract",
        "1 tsp baking powder",
        "1/2 tsp salt",
        "1/4 cup cocoa powder",
        "1/4 cup milk",
    ],
    instructions:
        "1. Preheat the oven to 180°C (350°F). 2. In a bowl, cream together butter and sugar until light and fluffy. 3. Beat in the eggs one at a time, then stir in the vanilla extract. 4. In another bowl, sift together flour, baking powder, salt, and cocoa powder. 5. Gradually add the dry ingredients to the wet mixture, alternating with milk, until well combined. 6. Pour the batter into a greased cake pan and bake for 25-30 minutes or until a toothpick inserted comes out clean. 7. Let it cool before frosting with cream cheese frosting."
  },
  {
    name: "Black Forest Cake", category: "cakes",
    ingredients: [
        "250g butter",
        "1 cup sugar",
        "2 eggs",
        "1 cup flour",
        "1 tsp vanilla extract",
        "1 tsp baking powder",
        "1/2 tsp salt",
        "1/4 cup cocoa powder",
        "1/4 cup milk",
        "1 cup whipped cream",
        "1/2 cup cherries, pitted and halved"
    ],
    instructions:
        "1. Preheat the oven to 180°C (350°F). 2. In a bowl, cream together butter and sugar until light and fluffy. 3. Beat in the eggs one at a time, then stir in the vanilla extract. 4. In another bowl, sift together flour, baking powder, salt, and cocoa powder. 5. Gradually add the dry ingredients to the wet mixture, alternating with milk, until well combined. 6. Pour the batter into a greased cake pan and bake for 25-30 minutes or until a toothpick inserted comes out clean. 7. Let it cool, then slice the cake in half horizontally. 8. Spread whipped cream on one layer, add cherries, and place the other layer on top. 9. Frost the top with more whipped cream and garnish with cherries."
  },
  {
    name: "Pineapple Upside Down Cake", category: "cakes",
    ingredients: [
        "250g butter",
        "1 cup sugar",
        "2 eggs",
        "1 cup flour",
        "1 tsp vanilla extract",
        "1 tsp baking powder",
        "1/2 tsp salt",
        "1/4 cup milk",
        "1 can pineapple slices",
        "Maraschino cherries for garnish"
    ],
    instructions:
        "1. Preheat the oven to 180°C (350°F). 2. In a bowl, cream together butter and sugar until light and fluffy. 3. Beat in the eggs one at a time, then stir in the vanilla extract. 4. In another bowl, sift together flour, baking powder, and salt. 5. Gradually add the dry ingredients to the wet mixture, alternating with milk, until well combined. 6. In a greased cake pan, arrange pineapple slices at the bottom and place cherries in the center of each slice. 7. Pour the batter over the pineapple slices and bake for 25-30 minutes or until a toothpick inserted comes out clean. 8. Let it cool slightly before inverting onto a serving plate."
  },
  {
    name: "Lemon Drizzle Cake", category: "cakes",
    ingredients: [
        "250g butter",
        "1 cup sugar",
        "2 eggs",
        "1 cup flour",
        "1 tsp vanilla extract",
        "1 tsp baking powder",
        "1/2 tsp salt",
        "1/4 cup milk",
        "Juice and zest of 1 lemon"
    ],
    instructions:
        "1. Preheat the oven to 180°C (350°F). 2. In a bowl, cream together butter and sugar until light and fluffy. 3. Beat in the eggs one at a time, then stir in the vanilla extract and lemon zest. 4. In another bowl, sift together flour, baking powder, and salt. 5. Gradually add the dry ingredients to the wet mixture, alternating with milk and lemon juice, until well combined. 6. Pour the batter into a greased cake pan and bake for 25-30 minutes or until a toothpick inserted comes out clean. 7. Let it cool before drizzling with a mixture of lemon juice and powdered sugar."
  },
  {
    name: "Carrot Cake", category: "cakes",
    ingredients: [
        "250g butter",
        "1 cup sugar",
        "2 eggs",
        "1 cup flour",
        "1 tsp vanilla extract",
        "1 tsp baking powder",
        "1/2 tsp salt",
        "1/2 cup grated carrots",
        "1/4 cup chopped walnuts (optional)",
        "1/4 cup milk"
    ],
    instructions:
        "1. Preheat the oven to 180°C (350°F). 2. In a bowl, cream together butter and sugar until light and fluffy. 3. Beat in the eggs one at a time, then stir in the vanilla extract. 4. In another bowl, sift together flour, baking powder, and salt. 5. Gradually add the dry ingredients to the wet mixture, alternating with milk, until well combined. 6. Fold in grated carrots and chopped walnuts if using. 7. Pour the batter into a greased cake pan and bake for 25-30 minutes or until a toothpick inserted comes out clean. 8. Let it cool before frosting with cream cheese frosting."
  },
  {
    name: "Strawberry Cheesecake", category: "cakes",
    ingredients: [
        "200g digestive biscuits, crushed",
        "100g butter, melted",
        "400g cream cheese",
        "1 cup sugar",
        "2 eggs",
        "1 tsp vanilla extract",
        "1/4 cup sour cream",
        "1 cup fresh strawberries, sliced"
    ],
    instructions:
        "1. Preheat the oven to 180°C (350°F). 2. In a bowl, mix crushed digestive biscuits with melted butter until well combined. 3. Press the mixture into the bottom of a springform pan to form the crust. 4. In another bowl, beat cream cheese and sugar until smooth. 5. Add eggs one at a time, mixing well after each addition, then stir in vanilla extract and sour cream. 6. Pour the cream cheese mixture over the crust and smooth the top. 7. Bake for 30-35 minutes or until set; let it cool completely. 8. Top with sliced strawberries before serving."
  },
  {
    name: "Chocolate Lava Cake", category: "cakes",
    ingredients: [
        "100g dark chocolate",
        "100g butter",
        "1/2 cup sugar",
        "2 eggs",
        "1/4 cup flour",
        "1 tsp vanilla extract",
        "Pinch of salt"
    ],
    instructions:
        "1. Preheat the oven to 220°C (428°F). 2. In a microwave-safe bowl, melt dark chocolate and butter together until smooth. 3. In another bowl, whisk together sugar, eggs, vanilla extract, and salt until well combined. 4. Gradually add the melted chocolate mixture to the egg mixture, stirring continuously. 5. Sift in the flour and mix until just combined. 6. Grease ramekins with butter and dust with flour; pour the batter into the ramekins until they are about 3/4 full. 7. Bake for 12-14 minutes or until the edges are firm but the center is still soft. 8. Let it cool for a minute before inverting onto a plate; serve immediately."
  },
  {
    name: "Butterscotch Cake", category: "cakes",
    ingredients: [
        "250g butter",
        "1 cup sugar",
        "2 eggs",
        "1 cup flour",
        "1 tsp vanilla extract",
        "1 tsp baking powder",
        "1/2 tsp salt",
        "1/4 cup milk",
        "1/4 cup butterscotch sauce"
    ],
    instructions:
        "1. Preheat the oven to 180°C (350°F). 2. In a bowl, cream together butter and sugar until light and fluffy. 3. Beat in the eggs one at a time, then stir in the vanilla extract. 4. In another bowl, sift together flour, baking powder, and salt. 5. Gradually add the dry ingredients to the wet mixture, alternating with milk and butterscotch sauce, until well combined. 6. Pour the batter into a greased cake pan and bake for 25-30 minutes or until a toothpick inserted comes out clean. 7. Let it cool before drizzling with more butterscotch sauce."
  },
  {
    name: "Mango Mousse Cake", category: "cakes",
    ingredients: [
        "250g cream cheese",
        "1 cup mango puree",
        "1/2 cup sugar",
        "1/2 cup whipped cream",
        "1/4 cup gelatin dissolved in 1/4 cup water",
        "1 tsp vanilla extract",
        "200g digestive biscuits, crushed",
        "100g butter, melted"
    ],
    instructions:
        "1. In a bowl, mix crushed digestive biscuits with melted butter until well combined. 2. Press the mixture into the bottom of a springform pan to form the crust. 3. In another bowl, beat cream cheese and sugar until smooth. 4. Add mango puree and vanilla extract, mixing well. 5. Gently fold in the whipped cream until combined. 6. Gradually add the dissolved gelatin to the mango mixture, stirring continuously. 7. Pour the mango mousse over the crust and smooth the top. 8. Refrigerate for at least 4 hours or until set before serving."
  },
  {
    name: "Coffee Walnut Cake", category: "cakes",
    ingredients: [
        "250g butter",
        "1 cup sugar",
        "2 eggs",
        "1 cup flour",
        "1 tsp vanilla extract",
        "1 tsp baking powder",
        "1/2 tsp salt",
        "1/4 cup brewed coffee, cooled",
        "1/2 cup chopped walnuts"
    ],
    instructions:
        "1. Preheat the oven to 180°C (350°F). 2. In a bowl, cream together butter and sugar until light and fluffy. 3. Beat in the eggs one at a time, then stir in the vanilla extract and cooled coffee. 4. In another bowl, sift together flour, baking powder, and salt. 5. Gradually add the dry ingredients to the wet mixture until well combined. 6. Fold in chopped walnuts gently. 7. Pour the batter into a greased cake pan and bake for 25-30 minutes or until a toothpick inserted comes out clean. 8. Let it cool before serving."
  },
  {
    name: "Watermelon Juice", category: "juices",
    ingredients: [
        "4 cups watermelon, cubed",
        "1 tbsp lemon juice",
        "1-2 tbsp sugar (optional)",
        "Mint leaves for garnish"
    ],
    instructions:
        "1. Place the watermelon cubes in a blender and blend until smooth. 2. Strain the juice through a fine sieve to remove pulp if desired. 3. Stir in lemon juice and sugar to taste. 4. Serve chilled, garnished with mint leaves."
  },
  {
    name: "Orange Juice", category: "juices",
    ingredients: [
        "4-5 oranges, peeled and segmented",
        "1 tbsp lemon juice",
        "1-2 tbsp sugar (optional)",
        "Ice cubes for serving"
    ],
    instructions:
        "1. Place the orange segments in a blender and blend until smooth. 2. Strain the juice through a fine sieve to remove pulp if desired. 3. Stir in lemon juice and sugar to taste. 4. Serve chilled over ice cubes."
  },
  {
    name: "Apple Juice", category: "juices",
    ingredients: [
        "4-5 apples, cored and chopped",
        "1 tbsp lemon juice",
        "1-2 tbsp sugar (optional)",
        "Ice cubes for serving"
    ],
    instructions:
        "1. Place the apple pieces in a blender and blend until smooth. 2. Strain the juice through a fine sieve to remove pulp if desired. 3. Stir in lemon juice and sugar to taste. 4. Serve chilled over ice cubes."
  },
  {
    name: "Pomegranate Juice", category: "juices",
    ingredients: [
        "2-3 pomegranates, seeds removed",
        "1 tbsp lemon juice",
        "1-2 tbsp sugar (optional)",
        "Mint leaves for garnish"
    ],
    instructions:
        "1. Place the pomegranate seeds in a blender and blend until smooth. 2. Strain the juice through a fine sieve to remove pulp if desired. 3. Stir in lemon juice and sugar to taste. 4. Serve chilled, garnished with mint leaves."
  },
  {
    name: "Grape Juice", category: "juices",
    ingredients: [
        "2 cups grapes, stems removed",
        "1 tbsp lemon juice",
        "1-2 tbsp sugar (optional)",
        "Ice cubes for serving"
    ],
    instructions:
        "1. Place the grapes in a blender and blend until smooth. 2. Strain the juice through a fine sieve to remove pulp if desired. 3. Stir in lemon juice and sugar to taste. 4. Serve chilled over ice cubes."
  },
  {
    name: "Pineapple Juice", category: "juices",
    ingredients: [
        "1 ripe pineapple, peeled and chopped",
        "1 tbsp lemon juice",
        "1-2 tbsp sugar (optional)",
        "Mint leaves for garnish"
    ],
    instructions:
        "1. Place the pineapple pieces in a blender and blend until smooth. 2. Strain the juice through a fine sieve to remove pulp if desired. 3. Stir in lemon juice and sugar to taste. 4. Serve chilled, garnished with mint leaves."
  },
  {
    name: "Cucumber Mint Cooler", category: "juices",
    ingredients: [
        "1 cucumber, peeled and chopped",
        "1/4 cup mint leaves",
        "1 tbsp lemon juice",
        "1-2 tbsp sugar (optional)",
        "2 cups water",
        "Ice cubes for serving"
    ],
    instructions:
        "1. Place the cucumber, mint leaves, lemon juice, sugar, and water in a blender and blend until smooth. 2. Strain the juice through a fine sieve to remove pulp if desired. 3. Serve chilled over ice cubes."
  },
  {
    name: "Beetroot Juice", category: "juices",
    ingredients: [
        "2 medium beetroots, peeled and chopped",
        "1 apple, cored and chopped",
        "1 tbsp lemon juice",
        "1-2 tbsp sugar (optional)",
        "2 cups water",
        "Mint leaves for garnish"
    ],
    instructions:
        "1. Place the beetroot and apple pieces in a blender with water and blend until smooth. 2. Strain the juice through a fine sieve to remove pulp if desired. 3. Stir in lemon juice and sugar to taste. 4. Serve chilled, garnished with mint leaves."
  },
  {
    name: "Amla Juice", category: "juices",
    ingredients: [
        "10-12 amla (Indian gooseberries), pitted and chopped",
        "1 tbsp honey or sugar (optional)",
        "1-2 cups water",
        "Mint leaves for garnish"
    ],
    instructions:
        "1. Place the chopped amla in a blender with water and blend until smooth. 2. Strain the juice through a fine sieve to remove pulp if desired. 3. Stir in honey or sugar to taste. 4. Serve chilled, garnished with mint leaves."
  },
  {
    name: "Garelu (Medu Vada)", category: "snacks",
    ingredients: [
        "1 cup urad dal (split black gram), soaked for 4-5 hours",
        "1 small onion, finely chopped",
        "2 green chilies, finely chopped",
        "1 tsp ginger paste",
        "Salt to taste",
        "Oil for deep frying"
    ],
    instructions:
        "1. Drain the soaked urad dal and grind it to a smooth batter, adding a little water if necessary. 2. Transfer the batter to a bowl and mix in chopped onion, green chilies, ginger paste, and salt. 3. Heat oil in a deep frying pan over medium heat. 4. Wet your hands and take a small portion of the batter; shape it into a donut (vada) with a hole in the center. 5. Carefully slide the vada into the hot oil and fry until golden brown on both sides. 6. Remove and drain on paper towels before serving hot with coconut chutney."
  },
  {
    name: "Punugulu", category: "snacks",
    ingredients: [
        "1 cup dosa batter (fermented rice and lentil batter)",
        "1 small onion, finely chopped",
        "2 green chilies, finely chopped",
        "1/4 cup chopped coriander leaves",
        "Salt to taste",
        "Oil for deep frying"
    ],
    instructions:
        "1. In a bowl, mix dosa batter with chopped onion, green chilies, coriander leaves, and salt. 2. Heat oil in a deep frying pan over medium heat. 3. Drop small spoonfuls of the batter into the hot oil and fry until golden brown on all sides. 4. Remove and drain on paper towels before serving hot with chutney."
  },
  {
    name: "Boorelu", category: "snacks",
    ingredients: [
        "1 cup chana dal (split Bengal gram), soaked for 4-5 hours",
        "1/2 cup jaggery, grated",
        "1/2 cup rice flour",
        "1/4 tsp cardamom powder",
        "Salt to taste",
        "Oil for deep frying"
    ],
    instructions:
        "1. Drain the soaked chana dal and grind it to a coarse paste. 2. In a bowl, mix the ground dal with jaggery, rice flour, cardamom powder, and salt to form a dough. 3. Heat oil in a deep frying pan over medium heat. 4. Take small portions of the dough and shape them into small balls. 5. Carefully drop the balls into the hot oil and fry until golden brown on all sides. 6. Remove and drain on paper towels before serving hot."
  },
  {
    name: "Pesara Punukulu", category: "snacks",
    ingredients: [
        "1 cup moong dal (split green gram), soaked for 4-5 hours",
        "1 small onion, finely chopped",
        "2 green chilies, finely chopped",
        "1/4 cup chopped coriander leaves",
        "Salt to taste",
        "Oil for deep frying"
    ],
    instructions:
        "1. Drain the soaked moong dal and grind it to a coarse paste, adding a little water if necessary. 2. Transfer the batter to a bowl and mix in chopped onion, green chilies, coriander leaves, and salt. 3. Heat oil in a deep frying pan over medium heat. 4. Drop small spoonfuls of the batter into the hot oil and fry until golden brown on all sides. 5. Remove and drain on paper towels before serving hot with chutney."
  },
  {
    name: "Chekkalu (Thattai)", category: "snacks",
    ingredients: [
        "1 cup rice flour",
        "1/4 cup urad dal flour",
        "1/4 cup roasted peanuts, coarsely crushed",
        "2-3 green chilies, finely chopped",
        "1 tsp cumin seeds",
        "Salt to taste",
        "Oil for deep frying"
    ],
    instructions:
        "1. In a bowl, mix rice flour, urad dal flour, crushed peanuts, green chilies, cumin seeds, and salt. 2. Add enough water to form a stiff dough. 3. Take small portions of the dough and flatten them into thin discs. 4. Heat oil in a deep frying pan over medium heat. 5. Fry the discs until they are golden brown and crispy on both sides. 6. Remove and drain on paper towels before serving."
  },
  {
    name: "Perugu Garelu", category: "snacks",
    ingredients: [
        "1 cup urad dal (split black gram), soaked for 4-5 hours",
        "1 small onion, finely chopped",
        "2 green chilies, finely chopped",
        "1/2 cup yogurt",
        "Salt to taste",
        "Oil for deep frying"
    ],
    instructions:
        "1. Drain the soaked urad dal and grind it to a smooth batter, adding a little water if necessary. 2. Transfer the batter to a bowl and mix in chopped onion, green chilies, and salt. 3. Heat oil in a deep frying pan over medium heat. 4. Wet your hands and take a small portion of the batter; shape it into a donut (vada) with a hole in the center. 5. Carefully slide the vada into the hot oil and fry until golden brown on both sides. 6. Remove and drain on paper towels, then serve with yogurt on top."
  },
  {
    name: "Saggubiyyam Vada", category: "snacks",
    ingredients: [
        "1 cup sago (sabudana), soaked for 4-5 hours",
        "1 small onion, finely chopped",
        "2 green chilies, finely chopped",
        "1/4 cup grated coconut",
        "Salt to taste",
        "Oil for deep frying"
    ],
    instructions:
        "1. Drain the soaked sago and transfer it to a bowl. 2. Mix in chopped onion, green chilies, grated coconut, and salt to form a dough. 3. Heat oil in a deep frying pan over medium heat. 4. Take small portions of the dough and shape them into small balls or discs. 5. Carefully drop the vadas into the hot oil and fry until golden brown on all sides. 6. Remove and drain on paper towels before serving hot."
  },
  {
    name: "Karam Gavvalu", category: "snacks",
    ingredients: [
        "1 cup all-purpose flour",
        "1/4 cup rice flour",
        "1/2 tsp red chili powder",
        "1/2 tsp cumin seeds",
        "Salt to taste",
        "Water as needed",
        "Oil for deep frying"
    ],
    instructions:
        "1. In a bowl, mix all-purpose flour, rice flour, red chili powder, cumin seeds, and salt. 2. Gradually add water to form a stiff dough. 3. Take small portions of the dough and roll them into small balls or discs. 4. Heat oil in a deep frying pan over medium heat. 5. Fry the balls until they are golden brown and crispy on all sides. 6. Remove and drain on paper towels before serving."
  }
  // Add additional recipes here following the same structure
];

const recipes = recipeData.map((r, i) => ({
  ...r,
  image: `images/recipe${i + 1}.jpeg`
}));


const recipeList = document.getElementById("recipe-list");
const searchInput = document.getElementById("search");
const modal = document.getElementById("recipe-modal");
const modalTitle = document.getElementById("modal-title");
const modalIngredients = document.getElementById("modal-ingredients");
const modalInstructions = document.getElementById("modal-instructions");
const closeModal = document.getElementById("close-btn");

function displayRecipes(recipesToShow) {
  recipeList.innerHTML = "";
  recipesToShow.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.setAttribute("data-category", recipe.category);

    const img = document.createElement("img");
    img.src = recipe.image;
    img.alt = recipe.name;

    const title = document.createElement("h2");
    title.textContent = recipe.name;

    const button = document.createElement("button");
    button.textContent = "View Recipe";
    button.addEventListener("click", () => showModal(index));

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(button);
    recipeList.appendChild(card);
  });
}

function showModal(index) {
  const recipe = recipes[index];
  modalTitle.textContent = recipe.name;
  modalIngredients.innerHTML = recipe.ingredients
    .map((ingredient) => `<li>${ingredient}</li>`)
    .join("");
  modalInstructions.textContent = recipe.instructions;
  modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(query)
  );
  displayRecipes(filtered);
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    if (category === "all") {
      displayRecipes(recipes);
    } else {
      const filtered = recipes.filter((r) => r.category === category);
      displayRecipes(filtered);
    }
  });
});

// Initial load
displayRecipes(recipes);
