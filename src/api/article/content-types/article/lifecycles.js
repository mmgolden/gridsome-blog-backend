const readingTime = require("reading-time");
/**
 * Read the documentation (https://docs.strapi.io/developer-docs/latest/development/backend-customization/models.html#declarative-and-programmatic-usage)
 * to customize this model
 */
module.exports = {
  async beforeCreate(event) {
    const { body } = event.params.data;

    if (body && body?.length > 0) {
      event.params.data.readingTime = readingTime(body)?.text || null;
    }
  },

  async beforeUpdate(event) {
    const { body } = event.params.data;

    if (body && body?.length > 0) {
      event.params.data.readingTime = readingTime(body)?.text || null;
    }
  },
};