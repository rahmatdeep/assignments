"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const user_1 = require("../user");
const todo_1 = require("../todo");
const setup_1 = require("../setup");
const prisma = new client_1.PrismaClient();
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, setup_1.dropTables)();
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () { }));
describe("User Database Operations", () => {
    test("createUser inserts a new user into the database", () => __awaiter(void 0, void 0, void 0, function* () {
        const username = "testuser";
        const password = "testpass"; // Consider using hashed passwords in actual tests
        const name = "Test User";
        const user = yield (0, user_1.createUser)(username, password, name);
        expect(user).toHaveProperty("username", username);
        expect(user).toHaveProperty("name", name);
        // Assuming password is hashed, you might not compare it directly
    }));
    test("getUser retrieves a user by ID", () => __awaiter(void 0, void 0, void 0, function* () {
        // Create a user first to ensure there is a user to retrieve
        const newUser = yield (0, user_1.createUser)("newuser", "password", "New User");
        const user = yield (0, user_1.getUser)(newUser.id);
        expect(user).toHaveProperty("id", newUser.id);
        expect(user).toHaveProperty("username", "newuser");
        expect(user).toHaveProperty("name", "New User");
    }));
});
describe("Todo Operations", () => {
    let userId;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        // Create a user for todos
        const user = yield (0, user_1.createUser)("todouser", "password", "Todo User");
        userId = user.id;
    }));
    test("createTodo inserts a new todo for a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const title = "Test Todo";
        const description = "Test Description";
        const todo = yield (0, todo_1.createTodo)(userId, title, description);
        expect(todo).toHaveProperty("title", title);
        expect(todo).toHaveProperty("description", description);
        expect(todo).toHaveProperty("done", false);
    }));
    test("updateTodo marks a todo as done", () => __awaiter(void 0, void 0, void 0, function* () {
        const todo = yield (0, todo_1.createTodo)(userId, "Update Test", "To be updated");
        const updatedTodo = yield (0, todo_1.updateTodo)(todo.id);
        expect(updatedTodo).toHaveProperty("done", true);
    }));
    test("getTodos retrieves all todos for a user", () => __awaiter(void 0, void 0, void 0, function* () {
        // Assuming createTodo adds to the todos for the user
        yield (0, todo_1.createTodo)(userId, "Another Todo", "Another description");
        const todos = yield (0, todo_1.getTodos)(userId);
        expect(todos.length).toBeGreaterThan(0);
        todos.forEach((todo) => {
            expect(todo).toHaveProperty("userId", userId);
        });
    }));
});
