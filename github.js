class Github {
  constructor() {
    this.client_id = "cf883baf9ee2cce35fd0";
    this.client_secret = "776810e182b2dcb3c478d61cfa9c254b1f5fb195";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      //As profile : profile => ES6 profile is enough
      //   profile: profile,
      profile,
      //As repos : repos => ES6 profile is enough
      //   repos: repos,
      repos,
    };
  }
}
