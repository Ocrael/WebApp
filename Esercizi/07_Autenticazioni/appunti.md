curl -X POST -H "Content-Type: application/json" -d '{"username": "user1", "password": "password1"}' http://localhost:3000/protected
curl -X POST -H "Content-Type: application/json" -d '{"username": "user1", "password": "password1"}' http://localhost:3000/login


curl -X GET -H "Authorization: your-jwt-token" http://localhost:3000/protected

curl -X GET -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjg3OTU4MDQyLCJleHAiOjE2ODc5NjE2NDJ9.sOOha0Dn9tQuJnHEFrSVe96ccebYvIPkDIXVsot7gao" http://localhost:3000/protected

curl -X POST -H "Content-Type: application/json" -d'{"username":"admin","password":"adminpassword"}' http://localhost:3000/protected
curl -X POST -H "Content-Type: application/json" -d'{"username":"admin","password":"adminpassword"}' http://localhost:3000/login

curl -X GET -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjg3OTYwNTA1LCJleHAiOjE2ODc5NjQxMDV9.Hy3xdja3l4PWDsP4KXtsVzgtn57zJsmdxpZ6WdXR7rs" http://localhost:3000/admin


eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjg3OTU5OTMxLCJleHAiOjE2ODc5NjM1MzF9.nhGx4DJ9a6cGdzjtFeCGA1rxnfjIXV5_zO0lFw_W5f4



npm install jsonwebtoken


payroll: dati che ci vengono rimandati


aggiungere premium(boolean), email(text), isActive(boolean)


curl -X GET -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjg4MTE0ODE5LCJleHAiOjE2ODgxMTg0MTl9.s31H7OHYsvwBkecnuq4SRB4XUkgS6tsJXGfX_9PnT8c" http://localhost:3000/protected


eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjg4MTE0ODE5LCJleHAiOjE2ODgxMTg0MTl9.s31H7OHYsvwBkecnuq4SRB4XUkgS6tsJXGfX_9PnT8c