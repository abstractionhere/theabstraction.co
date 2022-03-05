---
title: 'A serverless comment section for your static blogs'
description: 'Add comment section to your blogs created using basic HTML5-CSS3 or serverless frameworks like - Gatsby, which uses Github OAuth to post comment'
path: '/blogs/static-site-comment-system'
thumbnail: './cover.jpg'
author: 'allenabraham777'
name: 'Allen K Abraham'
published: false
date: '14-Feb-2020'
---

Comments help in better social reach of a blog and helps it's audience to get more involved into contents, so it is necessary to have a comments section in your blog.

There are 'n' number of platforms available which helps us to add comments section into our blog but most of them require us to create a server or create an account, which demotivates us from adding comments to our small websites, out of that one of the light weight, login free, serverless and easy to implement tool is [utterances](https://utteranc.es). Just adding a single line brings the comment section to your blog.

## Working
When ***Utterances*** loads, the GitHub issue search API is used to find the issue associated with the page based on url, pathname or title. If we cannot find an issue that matches the page, no problem, utterances-bot will automatically create an issue the first time someone comments.

To comment, users must authorize the utterances app to post on their behalf using the GitHub OAuth flow. Alternatively, users can comment on the GitHub issue directly.

## Implementation

To add **utterances** to your website first of all you need a github repository, you can either use the repo used to store your website or create a new one, I would suggest creating a new one as keeping comments as separate concern would be better. 

After the repository is ready you need to add the following code snippet to the ```div``` of ```section``` in which you are planning to add the comments.

```html
<script src="https://utteranc.es/client.js"
  repo="[ENTER REPO HERE]"
  issue-term="[ENTER TERM HERE]"
  theme="github-light"
  crossorigin="anonymous"
  async
>
</script>
```

<big>___repo:___</big> *The path to your github repo, it's of the format owner/repo*

<big>___issue-term:___</big> *It's used to track the issue with the blog. There are multiple options available.*
- ___pathname:___ Utterances will search for an issue whose title contains the blog post's pathname URL component. If a matching issue is not found, Utterances will automatically create one the first time someone comments on your post. 
- ___url:___ Utterances will search for an issue whose title contains the blog post's URL. If a matching issue is not found, Utterances will automatically create one the first time someone comments on your post.
- ___title:___ Utterances will search for an issue whose title contains the blog post's title. If a matching issue is not found, Utterances will automatically create one the first time someone comments on your post. 
- ___og:title:___ Utterances will search for an issue whose title contains the page's Open Graph title meta. If a matching issue is not found, Utterances will automatically create one the first time someone comments on your post. 
- ___custom term:___ You configure Utterances to search for an issue whose title contains a specific term of your choosing. If a matching issue is not found, Utterances will automatically create one the first time someone comments on your post. The issue's title will be the term you chose. 

<big>___theme:___</big> ```github-light``` or ```github-dark```

For more know more about it visit the [docs](https://utteranc.es). There is a tag generator available which is so handy to use.

## In React applications

There is a handy package in npm called ```react-utterances``` which could be used in our serverless react apps to implement utterances. Visit [npmjs](https://www.npmjs.com/package/react-utterances) for full docs.

#### Install

```shell
npm install react-utterances
```

#### Usage

```javascript
import React from 'react'
import ReactUtterences from 'react-utterances'
 
const repo = 'github-namespace/project-name'
 
const App = () => {
  return (
    <div>
      <h1>Utterances APp</h1>
      <p>A sample app showing utterances demo.</p>
      <ReactUtterences repo={repo} type={'pathname'} />
    </div>
  )
}
 
export default App
```

*type is the issue term mentioned in the previous section*

*theme options not available in this package*

## Fun fact

This website uses utterances in the comment section. The blogs are created as an ```*.md``` file and the pathname is used to track the comments. This makes this website to be hosted in a serverless platform and saves all concerns in server stacks.

## Conslusion
Out of the all tools available in market utterances is the handy one to implement the comment sections in your blog. Try out this tool in your blogs, play with it and share you experience in the comment section 😆

<br/>

# <center>Peace Out ✌️</center>
