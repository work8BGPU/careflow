import Main from "@/pages/Main.vue";
import Login from "@/pages/Login.vue";
import EmployeeCreate from "@/pages/Employee/Create.vue";
import UserCreate from "@/pages/User/Create.vue";
import PassengerCreate from "@/pages/Passenger/Create.vue";
import RequestCreate from "@/pages/Request/Create.vue";
import RequestDistribution from "@/pages/Request/Distribution.vue";
import WorkdayCreate from "@/pages/Workday/Create.vue";

const routes = [
    {
        path: "/",
        component: Main,
        name: "main",
    },
    {
        path: "/login",
        component: Login,
        name: "login",
    },
    {
        path: "/employees/create",
        component: EmployeeCreate,
        name: "employee.create",
    },
    {
        path: "/users/create",
        component: UserCreate,
        name: "user.create",
    },
    {
        path: "/passengers/create",
        component: PassengerCreate,
        name: "passenger.create",
    },
    {
        path: "/requests/create",
        component: RequestCreate,
        name: "request.create",
    },
    {
        path: "/requests/distribution",
        component: RequestDistribution,
        name: "request.distribution",
    },
    {
        path: "/workdays/create",
        component: WorkdayCreate,
        name: "workdays.create",
    },
];

export default routes;
