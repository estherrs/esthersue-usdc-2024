/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */
    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };
    if (scannedTextObj.length == 0) {
        return result;
    }
    /* Iterate through the list of books */
    current = 0;
    while (current < scannedTextObj.length) {
        book = scannedTextObj[current];
        if (book.Content.length == 0) {
            continue;
        }
        /* Iterate through the list of contents */
        contentIndex = 0;
        while (contentIndex < book.Content.length) {
            currentContent = book.Content[contentIndex];
            if (currentContent.Text.includes(searchTerm)) {
                /* Add to list of results */
                newEntry = {"ISBN": book.ISBN, "Page": currentContent.Page, "Line": currentContent.Line};
                result.Results.push(newEntry);
            }
            contentIndex = contentIndex + 1;
        }
        current = current + 1;
    }
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/* POSITIVE TESTS: tests that return a match. */
/* A test where the first book has no matches but other books have matches */
const books3 = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }, 
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
]
const books3out = {
    "SearchTerm": "gauntlet",
    "Results": [
        {
            "ISBN": "9780553213133",
            "Page": 1,
            "Line": 21,
        }
    ]
}
const test3result = findSearchTermInBooks("gauntlet", books1);
if (JSON.stringify(books3out) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
}
else {
    console.log("FAIL: Test 3");
    console.log("Expected: ", books3out);
    console.log("Received: ", test3result);
}
/* A test where there are many books and the very last book is a match */
const books4 = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }, 
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye.",
            }
        ]
    },
    {
        "Title": "The Rook",
        "ISBN": "9780316098809",
        "Content": [
            {
                "Page": 31,
                "Line": 5,
                "Text": "Thomas seems like a decent sort, but she’s a glorified paper pusher, she ",
            }
        ]
    },
]

const books4out = {
    "SearchTerm": "glorified",
    "Results": [
        {
            "ISBN": "9780316098809",
            "Page": 31,
            "Line": 5,
        }
    ]
}
const test4result = findSearchTermInBooks("glorified", books1);
if (JSON.stringify(books4out) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
}
else {
    console.log("FAIL: Test 4");
    console.log("Expected: ", books4out);
    console.log("Received: ", test4result);
}
/* Negative tests: tests that do not return any matches. */

/* Test there are no books and you search for an empty string */
const books5 = []
books5out = {
    "SearchTerm": "",
    "Results": []
}
const test5result = findSearchTermInBooks("", books5);
if (JSON.stringify(books5out) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
}
else {
    console.log("FAIL: Test 5");
    console.log("Expected: ", books5out);
    console.log("Received: ", test5result);
}
/* Test that there are books, but no content within the books and search for a word in the title */
const books6 = [
    {
        "Title": "Island of the Blue Dolphins",
        "ISBN": "123",
        "Content": []
    },
    {
        "Title": "The Swiss Family Robinson",
        "ISBN": "456",
        "Content": []
    }
]
books6out = {
    "SearchTerm": "Island",
    "Results": []
}
const test6result = findSearchTermInBooks("Island", books6);
if (JSON.stringify(books6out) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
}
else {
    console.log("FAIL: Test 6");
    console.log("Expected: ", books6out);
    console.log("Received: ", test6result);
}
/*Test where there are books and contents but no actual matches*/
const books7 = [
    {
        "Title": "Island of the Blue Dolphins",
        "ISBN": "123",
        "Content": [
            {
                "Page": "7",
                "Line": "1",
                "Text": "cliff and each night as we sat around out fires we wondered if the next sun would bring him home. "
            }
        ]
    },
    {
        "Title": "The Swiss Family Robinson",
        "ISBN": "",
        "Content": []
    }
]
books7out = {
    "SearchTerm": "cool",
    "Results": []
}
const test7result = findSearchTermInBooks("Island", books7);
if (JSON.stringify(books7out) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
}
else {
    console.log("FAIL: Test 7");
    console.log("Expected: ", books7out);
    console.log("Received: ", test7result);
}

/* Case-sensitive tests: tests that match (for example) on “The” but not on “the”. */
/*Test with the searched word many times in one line => make sure it isn’t reflected by having an inflated number of resulting lines */
const books8 = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }, 
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye. gauntlet gauntlet",
            }
        ]
    },
]
const books8out = {
    "SearchTerm": "gauntlet",
    "Results": [
        {
            "ISBN": "9780553213133",
            "Page": 1,
            "Line": 21,
        }
    ]
}
const test8result = findSearchTermInBooks("gauntlet", books1);
if (JSON.stringify(books8out) === JSON.stringify(test8result)) {
    console.log("PASS: Test 8");
}
else {
    console.log("FAIL: Test 8");
    console.log("Expected: ", books8out);
    console.log("Received: ", test8result);
}
// Search term is ‘page’ or ‘line’ => ensure we aren’t returning an inflated number

const books9 = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }, 
    {
        "Title": "Anne of Green Gables",
        "ISBN": "9780553213133",
        "Content": [
            {
                "Page": 1,
                "Line": 21,
                "Text": "gauntlet of Mrs. Rachel's all-seeing eye. gauntlet gauntlet",
            }
        ]
    },
]
const books9out = {
    "SearchTerm": "page",
    "Results": []
}
const test9result = findSearchTermInBooks("page", books1);
if (JSON.stringify(books9out) === JSON.stringify(test9result)) {
    console.log("PASS: Test 9");
}
else {
    console.log("FAIL: Test 9");
    console.log("Expected: ", books9out);
    console.log("Received: ", test9result);
} 
/* Capital letters matter test -->  Already done with sample test */