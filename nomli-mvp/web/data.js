"use strict";
window.NOMLI_DATA = {
  "date": "2026-10-25",
  "nav": [
    [
      "kitchen",
      "Kitchen"
    ],
    [
      "scan",
      "Scan"
    ],
    [
      "cook",
      "Cook"
    ],
    [
      "assistant",
      "Zara"
    ]
  ],
  "items": {
    "tomatoes": {
      "name": "Tomatoes",
      "qty": 5,
      "unit": "pieces",
      "storage": "Fridge",
      "days": 2,
      "category": "Produce",
      "low": 1
    },
    "basil": {
      "name": "Basil",
      "qty": 1,
      "unit": "bunches",
      "storage": "Fridge",
      "days": 1,
      "category": "Produce",
      "low": 0.2
    },
    "eggs": {
      "name": "Eggs",
      "qty": 8,
      "unit": "pieces",
      "storage": "Fridge",
      "days": 3,
      "category": "Dairy & eggs",
      "low": 2
    },
    "bread": {
      "name": "Sourdough",
      "qty": 4,
      "unit": "slices",
      "storage": "Freezer",
      "days": 30,
      "category": "Pantry",
      "low": 2
    },
    "garlic": {
      "name": "Garlic",
      "qty": 4,
      "unit": "cloves",
      "storage": "Pantry",
      "days": 14,
      "category": "Produce",
      "low": 1
    },
    "oil": {
      "name": "Olive oil",
      "qty": 250,
      "unit": "ml",
      "storage": "Pantry",
      "days": 240,
      "category": "Pantry",
      "low": 50
    },
    "salt": {
      "name": "Flaky salt",
      "qty": 50,
      "unit": "g",
      "storage": "Spices",
      "days": 365,
      "category": "Pantry",
      "low": 5
    },
    "lemon": {
      "name": "Lemon",
      "qty": 2,
      "unit": "pieces",
      "storage": "Fridge",
      "days": 9,
      "category": "Produce",
      "low": 0.5
    },
    "balsamic": {
      "name": "Balsamic glaze",
      "qty": 0,
      "unit": "ml",
      "storage": "Pantry",
      "days": 180,
      "category": "Pantry",
      "low": 10
    },
    "butter": {
      "name": "Butter",
      "qty": 0,
      "unit": "g",
      "storage": "Fridge",
      "days": 14,
      "category": "Dairy & eggs",
      "low": 10
    }
  },
  "tools": [
    {
      "id": "hob",
      "name": "Hob",
      "on": true
    },
    {
      "id": "pan",
      "name": "Frying pan",
      "on": true
    },
    {
      "id": "toaster",
      "name": "Toaster",
      "on": true
    },
    {
      "id": "oven",
      "name": "Oven",
      "on": true
    },
    {
      "id": "tray",
      "name": "Baking tray",
      "on": true
    },
    {
      "id": "knife",
      "name": "Knife & board",
      "on": true
    },
    {
      "id": "blender",
      "name": "Blender",
      "on": false
    },
    {
      "id": "airfryer",
      "name": "Air fryer",
      "on": false
    }
  ],
  "recipes": [
    {
      "id": "salad",
      "name": "Tomato & basil salad",
      "image": "images/recipe-salad-mobile.webp",
      "time": 8,
      "difficulty": "Beginner",
      "cuisine": "Mediterranean",
      "servings": 2,
      "allergens": [],
      "requiredTools": [
        "knife"
      ],
      "ingredients": [
        {
          "id": "tomatoes",
          "qty": 2
        },
        {
          "id": "basil",
          "qty": 0.25
        },
        {
          "id": "oil",
          "qty": 15
        },
        {
          "id": "salt",
          "qty": 1
        },
        {
          "id": "lemon",
          "qty": 0.5
        }
      ],
      "steps": [
        {
          "title": "Dice and salt",
          "text": "Cut the tomatoes, add the measured salt and let them rest before draining."
        },
        {
          "title": "Dress gently",
          "text": "Combine with basil, olive oil and lemon. Taste before changing the seasoning."
        },
        {
          "title": "Plate and serve",
          "text": "Spoon the dressed tomatoes onto plates, scatter the basil and serve."
        }
      ],
      "cardImage": "images/recipe-salad-card.webp"
    },
    {
      "id": "bruschetta",
      "name": "Tomato & basil bruschetta",
      "image": "images/plate-640.webp",
      "time": 12,
      "difficulty": "Beginner",
      "cuisine": "Mediterranean",
      "servings": 2,
      "allergens": [
        "wheat"
      ],
      "requiredTools": [
        "knife",
        "toaster"
      ],
      "ingredients": [
        {
          "id": "tomatoes",
          "qty": 2
        },
        {
          "id": "basil",
          "qty": 0.25
        },
        {
          "id": "bread",
          "qty": 2
        },
        {
          "id": "garlic",
          "qty": 1
        },
        {
          "id": "oil",
          "qty": 15
        },
        {
          "id": "salt",
          "qty": 1
        },
        {
          "id": "balsamic",
          "qty": 10,
          "swaps": [
            {
              "id": "lemon",
              "qty": 0.5
            },
            {
              "id": "skip",
              "qty": 0
            }
          ]
        }
      ],
      "steps": [
        {
          "title": "Dice and salt",
          "text": "Dice the tomatoes. Add the measured salt and let them rest, then drain the released liquid."
        },
        {
          "title": "Toast the bread",
          "text": "Toast the sourdough until crisp, then rub with the cut garlic."
        },
        {
          "title": "Assemble and finish",
          "text": "Add the tomatoes, basil and olive oil. Finish with your selected glaze or lemon, or leave the finish out."
        }
      ]
    },
    {
      "id": "omelette",
      "name": "Basil omelette",
      "image": "images/recipe-omelette-mobile.webp",
      "time": 8,
      "difficulty": "Beginner",
      "cuisine": "Everyday",
      "servings": 2,
      "allergens": [
        "egg",
        "milk"
      ],
      "requiredTools": [
        "hob",
        "pan"
      ],
      "ingredients": [
        {
          "id": "eggs",
          "qty": 4
        },
        {
          "id": "basil",
          "qty": 0.25
        },
        {
          "id": "butter",
          "qty": 10,
          "swaps": [
            {
              "id": "oil",
              "qty": 10
            }
          ]
        },
        {
          "id": "salt",
          "qty": 1
        }
      ],
      "steps": [
        {
          "title": "Prepare",
          "text": "Beat the eggs with the measured salt. Tear the basil."
        },
        {
          "title": "Control the heat",
          "text": "Warm your selected fat in the pan over gentle heat. Add the eggs and move the set edges inward."
        },
        {
          "title": "Fold and serve",
          "text": "Add the basil. Once the eggs have set, fold the omelette and slide it onto a plate."
        }
      ],
      "cardImage": "images/recipe-omelette-card.webp"
    },
    {
      "id": "skillet",
      "name": "Tomato & egg skillet",
      "image": "images/recipe-skillet-mobile.webp",
      "time": 15,
      "difficulty": "Developing",
      "cuisine": "MENA-inspired",
      "servings": 2,
      "allergens": [
        "egg"
      ],
      "requiredTools": [
        "hob",
        "pan"
      ],
      "ingredients": [
        {
          "id": "tomatoes",
          "qty": 3
        },
        {
          "id": "eggs",
          "qty": 2
        },
        {
          "id": "garlic",
          "qty": 1
        },
        {
          "id": "oil",
          "qty": 15
        },
        {
          "id": "salt",
          "qty": 1
        }
      ],
      "steps": [
        {
          "title": "Soften tomatoes",
          "text": "Warm the olive oil, then add garlic and chopped tomatoes."
        },
        {
          "title": "Reduce gently",
          "text": "Let the tomatoes soften and release their liquid. Lower the heat if the garlic begins to colour too quickly."
        },
        {
          "title": "Add the eggs",
          "text": "Make wells and add the eggs. Continue cooking until the whites and yolks are set, then finish with basil."
        }
      ],
      "cardImage": "images/recipe-skillet-card.webp"
    }
  ],
  "receipts": {
    "paper": {
      "name": "Paper receipt",
      "store": "Sample market",
      "lines": [
        {
          "id": "tomatoes",
          "qty": 4,
          "cents": 1850
        },
        {
          "id": "eggs",
          "qty": 6,
          "cents": 2400
        },
        {
          "id": "basil",
          "qty": 1,
          "cents": 800
        }
      ]
    },
    "digital": {
      "name": "Digital receipt / PDF",
      "store": "Sample online grocer",
      "lines": [
        {
          "id": "garlic",
          "qty": 1,
          "cents": 600
        },
        {
          "id": "bread",
          "qty": 2,
          "cents": 1650
        },
        {
          "id": "lemon",
          "qty": 2,
          "cents": 1200
        }
      ]
    }
  }
};
