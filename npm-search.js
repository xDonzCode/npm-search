const axios = require("axios");

async function searchNpm(keyword = "axios") {
  try {
    const url = `https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(keyword)}&size=10`;

    const { data } = await axios.get(url);

    const result = data.objects.map((item) => ({
      name: item.package.name,
      version: item.package.version,
      description: item.package.description,
      keywords: item.package.keywords,
      author: item.package.publisher.username,
      link: item.package.links.npm,
    }));

    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
}

searchNpm("axios");
