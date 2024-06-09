import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Do not click on the logos! hello
      </p>
    </>
  )
}

/*

Comprehensive
- Download git from here if not already installed: https://git-scm.com/download/win (if installation doesn't work, run download file as administrator)
- Open terminal
- Navigate terminal path to the directory (folder) that you want to be a git repository
- Create new repository on GitHub (doesn't have to be done yet; has nothing to do with your local git repository until later steps, but it usually feels right to do this here)
- Go back to your opened terminal and run `git init`
- (initializes an empty Git repository in C:/your/project/directory/.git/) 
- (your project directory probably looks something like: C:/Users/You/somewhere/somewhere-in-there/something/.git/)
- Run `git status` to see the untracked files in your newly-initialized local git repository
- Assuming your directory already contains files, run `git add .` to track (include in what will be committed) all files present (denoted by the `.`) (as opposed to `git add <file>`, if you only want to track a specific file) (if your directory/folder doesn't contain any files, for testing purposes you can just manually add a txt file)
- Run `git status` to now see changes to be committed (should be all files you added to be tracked by using the `git add` command)
- Try to commit changes with `git commit -m "first commit"`
- If this is your first time using git, you will be asked to identify yourself (you will only ever do this once)
- Run `git config --global user.email "you@example.com"`
- Run `git config --global user.name "Your Name"`
- If you had to identify yourself, try to commit again
- You have successfully committed changes to your local git repo! Let's go back to your empty GitHub repo.
- Look for the command in the examples that looks like `git remote add origin https://github.com/your-github-username/your-repository-name.git`
- If you don't see it, just copy the GitHub repo's url, and add `.git` to the end
- Go back to your terminal and run `git remote add origin https://github.com/your-github-username/your-repository-name.git`
- Run `git branch -M main` to create a main branch in your local git repo
- Run `git push -u origin main` to push the main branch of your local git repo to the remote GitHub repo (we established a link between these two repos earlier by using the command that contained the GitHub repo's url)
- If this is your first time, GitHub will ask you to login (to verify that you are the owner of this GitHub repo)
- Once you are logged in, you are done!
- Refresh the GitHub repo, and you should see the latest version of your local git repo "pushed" to GitHub!

Next steps...
- Make changes to the local repo as you normally would (modify its files)
- Run `git status` to see untracked changes (`git status` is technically optional)
- Run `git add .` to track all modified files, or selectively track files with `git add <file>`
- Run `git status` to see the changes that are tracked to be committed
- Run `git commit -m "your commit message"` to commit changes to the local repo
- Run `git push -u origin main` to push the newest version of the local repo's main branch to GitHub

Moving forward
- If everything was successful, in the future, you should be able to follow these simple instructions (from GitHub) to bridge the local repo and GitHub repo:
- Run the commands below to create a new repository on the command line: (assumes the local directory is empty, so first command creates a README file) 
echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/your-github-username/your-repository-name.git
git push -u origin main

- Run the commands below to push an existing repository from the command line:
git remote add origin https://github.com/your-github-username/your-repository-name.git
git branch -M main
git push -u origin main

*/

export default App
