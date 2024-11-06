# Model Schemas
 This is a list of all the model schemas used in the app.
- ## Suggestion
```sql
CREATE TABLE Suggestions (
    Id INT PRIMARY KEY,
    Trailer VARCHAR(255),
    Link VARCHAR(255),
    Description TEXT NOT NULL,
    Rating DECIMAL(2, 1),
    Name VARCHAR(100) NOT NULL,
    Category JSON NOT NULL,
    Screenshot JSON
);
```