import { Server } from "miragejs"
import books from "./json/books.json"

export function makeServer() {
  const server = new Server({
    routes() {
      this.namespace = "api"

      this.get("/books", (schema) => {
        return books;
      });
      this.post("books/add", (schema, req) => {
        const newData = JSON.parse(req.requestBody)
        // console.log(newData);
        books.push(newData);
      });

      // this.post("/:id", (schema, req) => {
     
      //   const d = books.filter(item => item.id != req.params.id);
      //   // JSON.parse(d);
      //   // books = d;
      //   console.log(d);

      
      // })
    }
  });
  return server;
};