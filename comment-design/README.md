# re:infer Design Test

## Introduction

Customer reviews submitted to an e-commerce platform are a simple example of the sort of data re:infer deals with. A client company will provide us with the original review text and some other metadata in which they are interested. re:infer will then do the following:

- Use ML to pick out _entities_ from the text, which are examples of words or phrases that are members of a known class. In the example you'll be working with, there is a **brand** and a **country**.
- Use ML to add _labels_ to the comment based on the meaning it infers from the text. These labels can each have either positive or negative sentiment associated with them.

The client can then do many different things with the results, from gathering summary statistics about the content of many thousands of reviews, to automating processes when an individual review matches certain criteria.

## The Test

In this test, imagine a customer review comment has been analysed by re:infer and is being presented back to the user in our webapp for them to review. You can find the static HTML in `index.html`. As you can see, it is essentially unstyled, and looks horrible. Your task is to style the comment component so that it is as attractive, useable and easy-to-understand as possible. Imagine this is a real-life piece of data that the client has sent us, and we're providing an annotated version so that they can see what insights our ML algorithms have gathered about the text they submitted. How can we best display this data?

The guidelines are:

- **This is a static example**. We don't expect you to implement any of the missing interactivity - clicking the buttons or submitting a new label shouldn't actually do anything, but maybe we can talk about what it might do in the interview. There's no need to write any javascript unless you really, really want to.
- Whilst most of the changes should probably be CSS (in `styles.css`), you are welcome to change the HTML markup too to alter the layout and so on, provided the same content is still presented.
- This is a small example, so you won't be judged on CSS naming conventions - don't worry about using BEM or anything like that.
- You can assume the client is using a modern, evergreen browser, so you can use flexbox, grid, etc. without vendor prefixes. The content isn't designed to be viewed on mobile, so the design _doesn't_ need to be responsive, just look good on a laptop.
- It's important to understand that the data in `.comment-properties` is metadata provided by the client - it doesn't come from our machine learning algorithms like the labels do.
- The exercise is only meant to take 60 - 90 minutes. Whilst almost everything can always be tweaked, it's more important to use this time to deliver a holistic design with some rough edges than get bits of it pixel perfect and neglect the rest. We can talk about what you would like to have done in the interview.

Some (hopefully) helpful things to think about:

- Think about what information is likely to be most useful and interesting. What are we telling the client that they don't already know?
- Which parts of the comment box are likely to be the most heavily used?
- Bear in mind that our clients are large companies hoping to optimise process and improve sales, so clear and useable trumps cuddly or over-complicated.
- Whilst this is a representative example, think about how your design would look/work if the data were very different:
  - the comment could have been much, much longer (we also work with email threads).
  - the number of properties (things like _Order value_) is totally up to the client, so it could be 0 or it could be 50.
  - likewise, the label names are up to the client. How would it look with LOTS of labels, or with really long label names?

Please submit your changes in a feature branch to make it easy for us to compare with the originals. If you have any thoughts or ideas you want to write down because you didn't get chance to implement them, feel free to leave them in a PR comment or committed text file.
