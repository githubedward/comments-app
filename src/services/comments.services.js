import axios from "axios";

const API_URL =
  "https://comments-api.azurewebsites.net/api"; /* didn't use env variables here for simplification */
const COMMENTS_URL = `${API_URL}/Comments`;

export default class CommentsAPI {
  /**
   * get all comments
   * @returns {object} api payload - comments
   */
  static async getAllComments() {
    try {
      const resp = await axios.get(COMMENTS_URL);
      return resp.data;
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * add a comment
   * @param {object} data
   * @returns {object} api payload - new comment
   */
  static async addComment(data) {
    try {
      const resp = await axios.post(COMMENTS_URL, data);
      return resp.data;
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * delete a comment
   * @param {number} id
   * @returns {object} status
   */
  static async deleteComment(id) {
    try {
      await axios.delete(`${COMMENTS_URL}/${id}`);
      return { status: "success" };
    } catch (err) {
      console.error(err);
    }
  }
}
