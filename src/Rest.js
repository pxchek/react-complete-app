import {Component} from "react";

class Rest extends Component {
    constructor(props) {
        super(props);
        this.repos = null;
        this.status = false;

    }

    getRepos() {
        window.fetch('https://api.github.com/users/facebook/repos')
            .then(response => response.json())
            .then(data => {
                this.repos = data;
            })
            .then(() => {
                this.status = true;
            })
            .catch(error => console.error(error))
    }

    logRepos() {
        console.log(this.repos);
    }

    render() {
        return (
            <div>
                <button onClick={this.getRepos}>
                    {this.status ? "Fetched" : "Fetch Repos"}
                </button>
                <button onClick={this.logRepos}>
                    Log Repos
                </button>
            </div>
        )
    }
}

export default Rest;