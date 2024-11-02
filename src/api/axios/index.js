import axios from "axios";
import { basicURL } from "../../common/constant";

class ApiService {
  constructor() {
    this.baseURL = basicURL; // Set your base URL here
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });
  }

  setAuthHeader(headers = {}) {
    const accessToken = localStorage.getItem("ACCESS_TOKEN"); // Use `getItem` instead of `get`
    localStorage.setItem(
      "EXPIRATION_DATE",
      new Date().getTime() + 5 * 60 * 1000
    );
    if (accessToken) {
      headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return headers;
  }

  async get(url, headers = {}, params = {}) {
    headers = this.setAuthHeader(headers);

    return await this.axiosInstance.get(url, {
      headers: headers,
      params: params,
    });
  }

  async post(url, data, headers = {}, options = {}) {
    headers = this.setAuthHeader(headers);

    const requestOptions = {
      headers: headers,
      ...options,
    };

    return await this.axiosInstance.post(url, data, requestOptions);
  }

  async put(url, data, headers = {}) {
    headers = this.setAuthHeader(headers);

    return await this.axiosInstance.put(url, data, {
      headers: headers,
    });
  }

  async patch(url, data, headers = {}) {
    headers = this.setAuthHeader(headers);

    return await this.axiosInstance.patch(url, data, {
      headers: headers,
    });
  }

  async delete(url, data, headers = {}) {
    headers = this.setAuthHeader(headers);

    return await this.axiosInstance.delete(url, {
      headers: headers,
      data,
    });
  }
}

export default new ApiService();
