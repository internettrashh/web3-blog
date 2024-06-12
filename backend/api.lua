-- load adm modeule mz
local function _load()
    local dbAdmin = {}
    dbAdmin.__index = dbAdmin 
    -- Function to create a new database explorer instance
    function dbAdmin.new(db)
        local self = setmetatable({}, dbAdmin)
       
        self.db = db
        return self
    end
    
    -- Function to list all tables in the database
    function dbAdmin:tables()
        local tables = {}
        for row in self.db:nrows("SELECT name FROM sqlite_master WHERE type='table';") do
            table.insert(tables, row.name)
        end
        return tables
    end
    
    -- Function to get the record count of a table
    function dbAdmin:count(tableName)
        local count_query = string.format("SELECT COUNT(*) AS count FROM %s;", tableName)
        for row in self.db:nrows(count_query) do
            return row.count
        end
    end
    
    -- Function to execute a given SQL query
    function dbAdmin:exec(sql)
        local results = {}
        for row in self.db:nrows(sql) do
            table.insert(results, row)
        end
        return results
    end
    
    return dbAdmin
    end
    
    _G.package.loaded["DbAdmin"] = _load()
--int  the fkn db
local sqlite3 = require('lsqlite3')
db = db or sqlite3.open_memory()
dbAdmin = require('DbAdmin').new(db)


-- schemea for the tables for the admin and users
AUTHORS = [[
  CREATE TABLE IF NOT EXISTS Authors (
    PID TEXT PRIMARY KEY,
    Name TEXT
  );
]]

POSTS = [[
  CREATE TABLE IF NOT EXISTS Posts (
    ID TEXT PRIMARY KEY,
    PID TEXT,
    Title TEXT,
    Body TEXT,
    FOREIGN KEY (PID) REFERENCES Authors(PID)
  );

]]

function InitDb() 
  db:exec(AUTHORS)
  db:exec(POSTS)
  return dbAdmin:tables()
end

InitDb()

Handlers.add("BlinkBlog.Register",
  function (msg)
    return msg.Action == "Register"
  end,
  function (msg)
    -- get author count to make sure author is not already registered
    local authorCount = #dbAdmin:exec(
      string.format([[select * from Authors where PID = "%s";]], msg.From)
    )
    if authorCount > 0 then
      Send({Target = msg.From, Action = "Registered", Data = "Already Registered"})
      print("Author already registered")
      return "Already Registered"
    end
    local Name = msg.Name or 'anon'
    dbAdmin:exec(string.format([[
      INSERT INTO Authors (PID, Name) VALUES ("%s", "%s");
    ]], msg.From, Name))
    Send({
      Target = msg.From,
      Action = "BlinkBlog.Registered",
      Data = "Successfully Registered."
    })
    print("Registered " .. Name)
  end 
)
Handlers.add("BlinkBlog.Post", 
  function (msg) 
    return msg.Action == "Create-Post"
  end,
  function (msg) 
    -- get user
    local author = dbAdmin:exec(string.format([[
      select PID, Name from Authors where PID = "%s";
    ]], msg.From))[1] 
    
    if author then
      -- add message
      dbAdmin:exec(string.format([[
        INSERT INTO Posts (ID, PID, Title, Body) VALUES ("%s", "%s", "%s", "%s");
      ]], msg.Id, author.PID, msg.Title, msg.Data ))
      Send({Target = msg.From, Data = "Article Posted."})
      print("New Article Posted")
      return "ok"
    else
      Send({Target = msg.From, Data = "Not Registered" })
      print("Author not registered, can't post")
    end
  end
  
)
Handlers.add("BlinkBlog.Posts", function (msg)
    return msg.Action == "List"
  end,
  function (msg)
    local posts = dbAdmin:exec([[
      select p.ID, p.Title, a.Name as "Author" from Posts p LEFT OUTER JOIN Authors a ON p.PID = a.PID;
    ]])
    print("Listing " .. #posts .. " posts")
    Send({Target = msg.From, Action = "BlinkBlog.Posts", Data = require('json').encode(posts)})
  end
  )
  -- get posit by id
  Handlers.add("BlinkBlog.Get",
function (msg) 
  return msg.Action == "Get"
end,
function (msg) 
  local post = dbAdmin:exec(string.format([[
    SELECT p.ID, p.Title, a.Name as "Author", p.Body FROM Posts p LEFT OUTER JOIN Authors a ON p.PID = a.PID WHERE p.ID = "%s";
  ]], msg['Post-Id']))
  Send({Target = msg.From, Action = "Get-Response", Data = require('json').encode(post)})
  print(post)
end
)

