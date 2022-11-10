import {Component} from "react";

class Rest extends Component {
    constructor(props) {
        super(props);
        this.repos = null;
        this.getRepos = this.getRepos.bind(this);
        this.logRepos = this.logRepos.bind(this);
        this.firstName = this.props.firstName;
        this.lastName = this.props.lastName;
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
                <button onClick={this.logRepos}>
                    Log Repos
                </button>
                <p>{this.props.firstName}</p>
                <p>{this.props.lastName}</p>
            </div>
        )
    }
}

export default Rest;