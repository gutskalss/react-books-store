export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Learning React: Functional Web Development with React and Redux',
      author: 'Alex Banks, Eve Porcello',
      published: 'May 18, 2017',
      price: 32.43,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg',
      additional: {
        itemWeight: 1.33,
        paperback: 350,
        ISBN10: '9781491954621',
        ISBN13: '978-1491954621',
        publisher: `O'Reilly Media`,
        language: 'English',
        ASIN: '1491954620',
      },
      description: `If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven websites without page reloads. Along the way, you’ll learn how to work with functional programming and the latest ECMAScript features.

      Developed by Facebook, and used by companies including Netflix, Walmart, and The New York Times for large parts of their web interfaces, React is quickly growing in use. By learning how to build React components with this hands-on guide, you’ll fully understand how useful React can be in your organization.`,
      category: 'javascript',
    },
    {
      id: 2,
      title:
        'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming',
      author: 'Marijn Haverbeke',
      published: 'December 4, 2018',
      price: 25.49,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/51MSWCvCmcL._SX377_BO1,204,203,200_.jpg',
      additional: {
        itemWeight: 2,
        paperback: 472,
        ISBN10: '1593279507',
        ISBN13: '978-1593279509',
        publisher: 'No Starch Press',
        language: 'English',
      },
      description: `JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.

      This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code. It has been updated to reflect the current state of Java¬Script and web browsers and includes brand-new material on features like class notation, arrow functions, iterators, async functions, template strings, and block scope. A host of new exercises have also been added to test your skills and keep you on track.`,
      category: 'javascript',
    },
    {
      id: 3,
      title: 'Pro React 16',
      author: 'Adam Freeman',
      published: 'March 19, 2019',
      price: 37.86,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/41W9YdrRslL._SX348_BO1,204,203,200_.jpg',
      additional: {
        itemWeight: 3.18,
        paperback: 745,
        ISBN10: '1484244508',
        ISBN13: '978-1484244500',
        publisher: 'Apress',
        language: 'English',
      },
      description: `Use the enormously popular React framework to build dynamic JavaScript applications that take advantage of the capabilities of modern browsers and devices. You will learn how React brings the power of strong architecture and responsive data to the client, providing the foundation for complex and rich user interfaces.

      Best-selling author Adam Freeman explains how to get the most from React. He begins by describing the React architecture and the benefits it offers and then shows you how to use React and its associated tools and libraries in your projects, starting from the nuts and bolts and building up to the most advanced and sophisticated features, going in-depth to give you the knowledge you need.
      
      Each topic is presented clearly and concisely. Chapters include common problems and how to avoid them.`,
      category: 'javascript',
    },
    {
      id: 4,
      title:
        'Programming TypeScript: Making Your JavaScript Applications Scale (1st Edition)',
      author: 'Boris Cherny',
      published: 'April 25, 2019',
      price: 27.49,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/51csAp-ykgL._SX379_BO1,204,203,200_.jpg',
      additional: {
        itemWeight: 1.1,
        paperback: 324,
        ISBN10: '1492037656',
        ISBN13: '978-1492037651',
        publisher: `O'Reilly Media`,
        language: 'English',
      },
      description: `Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system.

      If you’re a programmer with intermediate JavaScript experience, author Boris Cherny will teach you how to master the TypeScript language. You’ll understand how TypeScript can help you eliminate bugs in your code and enable you to scale your code across more engineers than you could before.`,
      category: 'typescript',
    },
    {
      id: 5,
      title:
        'Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming',
      author: 'Eric Matthes',
      published: 'May 3, 2019',
      price: 17,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/510-dE3N1PL._SX376_BO1,204,203,200_.jpg',
      additional: {
        itemWeight: 2.3,
        paperback: 544,
        ISBN10: '1593279280',
        ISBN13: '978-1593279288',
        publisher: 'No Starch Press',
        language: 'English',
      },
      description: `Python Crash Course is the world's best-selling guide to the Python programming language. This fast-paced, thorough introduction to programming with Python will have you writing programs, solving problems, and making things that work in no time.

      In the first half of the book, you'll learn basic programming concepts, such as variables, lists, classes, and loops, and practice writing clean code with exercises for each topic. You'll also learn how to make your programs interactive and test your code safely before adding it to a project. In the second half, you'll put your new knowledge into practice with three substantial projects: a Space Invaders-inspired arcade game, a set of data visualizations with Python's handy libraries, and a simple web app you can deploy online.`,
      category: 'python',
    },
    {
      id: 6,
      title: 'Learning Python, 5th Edition',
      author: 'Mark Lutz',
      published: 'July 9, 2013',
      price: 44.94,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/4109Y1VgveL._SX379_BO1,204,203,200_.jpg',
      additional: {
        itemWeight: 4.95,
        paperback: 1648,
        ISBN10: '1449355730',
        ISBN13: '978-1449355739',
        publisher: `O'Reilly Media`,
        language: 'English',
      },
      description: `Get a comprehensive, in-depth introduction to the core Python language with this hands-on book. Based on author Mark Lutz’s popular training course, this updated fifth edition will help you quickly write efficient, high-quality code with Python. It’s an ideal way to begin, whether you’re new to programming or a professional developer versed in other languages.

      Complete with quizzes, exercises, and helpful illustrations, this easy-to-follow, self-paced tutorial gets you started with both Python 2.7 and 3.3— the latest releases in the 3.X and 2.X lines—plus all other releases in common use today. You’ll also learn some advanced language features that recently have become more common in Python code.`,
      category: 'python',
    },
    {
      id: 7,
      title: `Learn Python 3 the Hard Way: A Very Simple Introduction to the Terrifyingly Beautiful World of Computers and Code (Zed Shaw's Hard Way Series)`,
      author: 'Zed Shaw',
      published: 'June 27, 2017',
      price: 24.99,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/41sXSVzqW-L._SX380_BO1,204,203,200_.jpg',
      additional: {
        itemWeight: 1.12,
        paperback: 320,
        ISBN10: '0134692888',
        ISBN13: '978-0134692883',
        publisher: 'Addison-Wesley Professional',
        language: 'English',
      },
      description: `Zed Shaw has perfected the world’s best system for learning Python 3. Follow it and you will succeed—just like the millions of beginners Zed has taught to date! You bring the discipline, commitment, and persistence; the author supplies everything else.

 

      In Learn Python 3 the Hard Way, you’ll learn Python by working through 52 brilliantly crafted exercises. Read them. Type their code precisely. (No copying and pasting!) Fix your mistakes. Watch the programs run. As you do, you’ll learn how a computer works; what good programs look like; and how to read, write, and think about code. Zed then teaches you even more in 5+ hours of video where he shows you how to break, fix, and debug your code—live, as he’s doing the exercises.`,
      category: 'python',
    },
    {
      id: 8,
      title: 'Essential TypeScript: From Beginner to Pro',
      author: 'Adam Freeman',
      published: 'August 15, 2019',
      price: 34.49,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/41iL6ZZPBUL._SX348_BO1,204,203,200_.jpg',
      additional: {
        itemWeight: 2.35,
        paperback: 546,
        ISBN10: '148424978X',
        ISBN13: '978-1484249789',
        publisher: 'Apress',
        language: 'English',
      },
      description: `Work with Typescript and get the most from this versatile open source language. Author Adam Freeman begins this book by describing Typescript and the benefits it offers, and goes on to show you how to use TypeScript in realistic scenarios, going in-depth to give you the knowledge you need. 

      Starting from the nuts-and-bolts and building up to the most advanced and sophisticated features, you will learn how TypeScript builds on the JavaScript type system to create a safer and more productive development experience and understand how TypeScript can be used to create applications using popular frameworks, including Node.js, Angular, React, and Vue.js.
      
      Each topic is covered clearly and concisely and is packed with the details you need to learn to be truly effective. The most important features are given a no-nonsense in-depth treatment and chapters include common problems and details of how to avoid them.`,
      category: 'typescript',
    },
  ]

  getBook(booksList, bookId) {
    return booksList.filter(book => book.id === bookId)
  }

  getBooks(bookId = null) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (Math.random() > 0.75) {
        if (false) {
          reject(new Error('Something bad happend'))
        } else {
          if (bookId) {
            resolve(this.getBook(this.data, bookId))
          } else {
            resolve(this.data)
          }
        }
      }, 1000)
    })
  }
}
