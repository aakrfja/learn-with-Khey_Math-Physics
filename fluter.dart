import 'package:flutter/material.dart';

void main() {
  runApp(CustomMessageApp());
}

class CustomMessageApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: LoginScreen(),
    );
  }
}

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  bool _isNotRobotChecked = false;

  void _login() {
    String username = _usernameController.text;
    String password = _passwordController.text;

    if (!_isNotRobotChecked) {
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('Verification Failed'),
            content: Text('Please confirm you are not a robot.'),
            actions: [
              TextButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: Text('OK'),
              ),
            ],
          );
        },
      );
      return;
    }

    if (username == 'kheng khey' && password == '1234') {
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => HomePage()),
      );
    } else {
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('Login Failed'),
            content: Text('Invalid username or password.'),
            actions: [
              TextButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: Text('OK'),
              ),
            ],
          );
        },
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: _usernameController,
              decoration: InputDecoration(labelText: 'Username'),
            ),
            TextField(
              controller: _passwordController,
              decoration: InputDecoration(labelText: 'Password'),
              obscureText: true,
            ),
            Row(
              children: [
                Checkbox(
                  value: _isNotRobotChecked,
                  onChanged: (bool? value) {
                    setState(() {
                      _isNotRobotChecked = value ?? false;
                    });
                  },
                ),
                Text("I'm not a robot")
              ],
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _login,
              child: Text('Login'),
            ),
          ],
        ),
      ),
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Text(
          'Welcome to the Home Page!',
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}

class CustomMessageScreen extends StatefulWidget {
  @override
  _CustomMessageScreenState createState() => _CustomMessageScreenState();
}

class _CustomMessageScreenState extends State<CustomMessageScreen> {
  String message = 'Default Message';
  final List<String> log = [];

  void _updateMessage() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        String newMessage = '';
        return AlertDialog(
          title: Text('Enter New Message'),
          content: TextField(
            onChanged: (value) {
              newMessage = value;
            },
            decoration: InputDecoration(hintText: 'Type your message here'),
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: Text('Cancel'),
            ),
            TextButton(
              onPressed: () {
                if (newMessage.isNotEmpty) {
                  setState(() {
                    message = newMessage;
                    log.add(newMessage);
                  });
                }
                Navigator.of(context).pop();
              },
              child: Text('Save'),
            ),
          ],
        );
      },
    );
  }

  void _showLog() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Message Log'),
          content: SizedBox(
            width: double.maxFinite,
            child: ListView(
              children: log.map((entry) => Text(entry)).toList(),
            ),
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: Text('Close'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Message App'),
        actions: [
          IconButton(
            icon: Icon(Icons.history),
            onPressed: _showLog,
          ),
        ],
      ),
      body: Center(
        child: Text(
          message,
          style: TextStyle(fontSize: 24),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _updateMessage,
        child: Icon(Icons.edit),
      ),
    );
  }
}














import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart'; // Fix for URL launch

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Learn with Khey',
      theme: ThemeData(primarySwatch: Colors.green),
      home: LoginScreen(),
    );
  }
}

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  bool _isNotRobotChecked = false;
  bool _isPasswordVisible = false;
  bool _useEmail = false;

  void _login() {
    String usernameOrEmail =
        _useEmail ? _emailController.text : _usernameController.text;
    String password = _passwordController.text;

    if (!_isNotRobotChecked) {
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('Verification Failed'),
            content: Text('Please confirm you are not a robot.'),
            actions: [
              TextButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: Text('OK'),
              ),
            ],
          );
        },
      );
      return;
    }

    if ((usernameOrEmail == 'kheng khey' ||
            usernameOrEmail == 'khengkhey835@gmail.com') &&
        password == '1234') {
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => MyHomePage()),
      );
    } else {
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('Login Failed'),
            content: Text('Invalid username/email or password.'),
            actions: [
              TextButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: Text('OK'),
              ),
            ],
          );
        },
      );
    }
  }

  @override
  void dispose() {
    _usernameController.dispose();
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: NetworkImage(
              'https://raw.githubusercontent.com/sdfxc/learn-with-Khey_Math-Physics/main/IMG_1.jpg',
            ),
            fit: BoxFit.cover,
          ),
        ),
        child: Center(
          child: Card(
            elevation: 8,
            margin: EdgeInsets.symmetric(horizontal: 32),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(16),
            ),
            child: Padding(
              padding: EdgeInsets.all(16.0),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    'Welcome Back',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 16),
                  if (_useEmail)
                    TextField(
                      controller: _emailController,
                      decoration: InputDecoration(
                        labelText: 'Email',
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(8),
                        ),
                      ),
                    )
                  else
                    TextField(
                      controller: _usernameController,
                      decoration: InputDecoration(
                        labelText: 'Username',
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(8),
                        ),
                      ),
                    ),
                  SizedBox(height: 16),
                  TextField(
                    controller: _passwordController,
                    decoration: InputDecoration(
                      labelText: 'Password',
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                      suffixIcon: IconButton(
                        icon: Icon(
                          _isPasswordVisible
                              ? Icons.visibility
                              : Icons.visibility_off,
                        ),
                        onPressed: () {
                          setState(() {
                            _isPasswordVisible = !_isPasswordVisible;
                          });
                        },
                      ),
                    ),
                    obscureText: !_isPasswordVisible,
                  ),
                  SizedBox(height: 16),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        children: [
                          Checkbox(
                            value: _isNotRobotChecked,
                            onChanged: (bool? value) {
                              setState(() {
                                _isNotRobotChecked = value ?? false;
                              });
                            },
                          ),
                          Text("I'm not a robot"),
                        ],
                      ),
                      Row(
                        children: [
                          Text(_useEmail ? 'Use Username' : 'Use Email'),
                          Switch(
                            value: _useEmail,
                            onChanged: (bool value) {
                              setState(() {
                                _useEmail = value;
                              });
                            },
                          ),
                        ],
                      ),
                    ],
                  ),
                  SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: _login,
                    style: ElevatedButton.styleFrom(
                      padding: EdgeInsets.symmetric(vertical: 16),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                    ),
                    child: Center(
                      child: Text(
                        'Login',
                        style: TextStyle(fontSize: 16),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _selectedIndex = 0;

  final List<Widget> _screens = [
    HomeScreen(),
    BookScreen(),
    ExerciseScreen(),
    AccountScreen(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Main Page'),
      ),
      body: _screens[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
        selectedItemColor: Colors.green,
        unselectedItemColor: Colors.black,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.book), label: 'Book'),
          BottomNavigationBarItem(
              icon: Icon(Icons.fitness_center), label: 'Exercise'),
          BottomNavigationBarItem(
              icon: Icon(Icons.account_circle), label: 'Account'),
        ],
      ),
    );
  }
}

class HomeScreen extends StatelessWidget {
  Widget _buildCategoryCard(String title, BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => CategoryDetailScreen(categoryName: title),
          ),
        );
      },
      child: Card(
        elevation: 4,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8),
        ),
        child: Center(
          child: Padding(
            padding: EdgeInsets.all(16.0),
            child: Text(
              title,
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Screen'),
      ),
      body: GridView.count(
        crossAxisCount: 2,
        padding: EdgeInsets.all(16.0),
        crossAxisSpacing: 10,
        mainAxisSpacing: 10,
        children: [
          _buildCategoryCard('អំណាន', context),
          _buildCategoryCard('តែងសេចក្ដី', context),
          _buildCategoryCard('រឿងនិទាន' ,context),
          _buildCategoryCard('ដំណើរផ្សងព្រេង',context),
          _buildCategoryCard('Free time',context),
          _buildCategoryCard('Challeng',context),
          _buildCategoryCard('Music',context),
          _buildCategoryCard('Relax',context),
          _buildCategoryCard('ការស្ដាប់',context),
          _buildCategoryCard('ផតខាស',context),
        ],
      ),
    );
  }
}

class CategoryDetailScreen extends StatelessWidget {
  final String categoryName;

  const CategoryDetailScreen({required this.categoryName});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('$categoryName Detail'),
      ),
      body: Center(
        child: Text(
          'Details for $categoryName will be displayed here.',
          style: TextStyle(fontSize: 18),
        ),
      ),
    );
  }
}

class BookScreen extends StatelessWidget {
  Widget _buildCategoryCard(String title, BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => CategoryDetailScreen(categoryName: title),
          ),
        );
      },
      child: Card(
        elevation: 4,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8),
        ),
        child: Center(
          child: Padding(
            padding: EdgeInsets.all(16.0),
            child: Text(
              title,
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Book Screen'),
      ),
      body: GridView.count(
        crossAxisCount: 2,
        padding: EdgeInsets.all(16.0),
        crossAxisSpacing: 10,
        mainAxisSpacing: 10,
        children: [
          _buildCategoryCard('ភាសាខ្មែរ', context),
          _buildCategoryCard('គណិតវិទ្យា', context),
          _buildCategoryCard('រូបវិទ្យា', context),
          _buildCategoryCard('គីមីវិទ្យា', context),
          _buildCategoryCard('ជីវវិទ្យា', context),
          _buildCategoryCard('ដំណើរវិទ្យា', context),
          _buildCategoryCard('ភូមិវិទ្យា', context),
          _buildCategoryCard('ប្រវត្តិវិទ្យា', context),
          _buildCategoryCard('ភាសាអង់គ្លេស', context),
          _buildCategoryCard('កិច្ចការខ្មែរ', context),
        ],
      ),
    );
  }
}

class ExerciseScreen extends StatelessWidget {
  Widget _buildCategoryCard(String title, BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => CategoryDetailScreen(categoryName: title),
          ),
        );
      },
      child: Card(
        elevation: 4,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8),
        ),
        child: Center(
          child: Padding(
            padding: EdgeInsets.all(16.0),
            child: Text(
              title,
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Exercise Screen'),
      ),
      body: GridView.count(
        crossAxisCount: 2,
        padding: EdgeInsets.all(16.0),
        crossAxisSpacing: 10,
        mainAxisSpacing: 10,
        children: [
          _buildCategoryCard('ភាសាខ្មែរ', context),
          _buildCategoryCard('គណិតវិទ្យា', context),
          _buildCategoryCard('រូបវិទ្យា', context),
          _buildCategoryCard('គីមីវិទ្យា', context),
          _buildCategoryCard('ជីវវិទ្យា', context),
          _buildCategoryCard('ដំណើរវិទ្យា', context),
          _buildCategoryCard('ភូមិវិទ្យា', context),
          _buildCategoryCard('ប្រវត្តិវិទ្យា', context),
          _buildCategoryCard('ភាសាអង់គ្លេស', context),
          _buildCategoryCard('កិច្ចការខ្មែរ', context),
        ],
      ),
    );
  }
}

class AccountScreen extends StatefulWidget {
  @override
  _AccountScreenState createState() => _AccountScreenState();
}

class _AccountScreenState extends State<AccountScreen> {
  String _userName = 'Kheng Khey'; // Example user name
  String _profileImageUrl = 'https://raw.githubusercontent.com/aakrfja/learn-with-Khey_Math-Physics/main/IMG_6058.PNG'; // Raw profile image URL
  bool _isNotificationsEnabled = true;
  String _selectedLanguage = 'English';

  // List of available languages for the dropdown
  final List<String> _languages = ['English', 'Khmer'];

  // Function to launch URL1 (Telegram link)
  Future<void> _launchURL1() async {
    const url1 = 'https://t.me/KHENG_kHeyz'; // First URL
    if (await canLaunch(url1)) {
      await launch(url1); // Launch the first URL
    } else {
      throw 'Could not launch $url1'; // Handle the error
    }
  }

  // Function to launch URL2 (Facebook link)
  Future<void> _launchURL2() async {
    const url2 = 'https://web.facebook.com/KHEnG.KhEy835'; // Second URL
    if (await canLaunch(url2)) {
      await launch(url2); // Launch the second URL
    } else {
      throw 'Could not launch $url2'; // Handle the error
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Account'),
        actions: [
          // Notification Icon
          IconButton(
            icon: Icon(Icons.notifications),
            onPressed: () {
              // Handle notification icon click (you can add your notification logic here)
              showDialog(
                context: context,
                builder: (BuildContext context) {
                  return AlertDialog(
                    title: Text('Notifications'),
                    content: Text('Here are your notifications!'),
                    actions: [
                      TextButton(
                        onPressed: () {
                          Navigator.of(context).pop();
                        },
                        child: Text('OK'),
                      ),
                    ],
                  );
                },
              );
            },
          ),
          // More Options Icon (e.g., settings)
          IconButton(
            icon: Icon(Icons.more_vert),
            onPressed: () {
              // Handle more options icon click (you can add more menu items here)
              showDialog(
                context: context,
                builder: (BuildContext context) {
                  return AlertDialog(
                    title: Text('More Options'),
                    content: Text('Settings, Help, Logout... etc'),
                    actions: [
                      TextButton(
                        onPressed: () {
                          Navigator.of(context).pop();
                        },
                        child: Text('OK'),
                      ),
                    ],
                  );
                },
              );
            },
          ),
        ],
      ),
      body: SingleChildScrollView( // Enable scrolling
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            // Profile Section
            Row(
              children: [
                CircleAvatar(
                  radius: 40,
                  backgroundImage: NetworkImage(_profileImageUrl),
                ),
                SizedBox(width: 16),
                Text(
                  _userName,
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
            SizedBox(height: 16),

            // Language Selection
            ListTile(
              title: Text('Language'),
              trailing: DropdownButton<String>(
                value: _selectedLanguage,
                onChanged: (String? newValue) {
                  setState(() {
                    _selectedLanguage = newValue!;
                  });
                },
                items: _languages.map<DropdownMenuItem<String>>((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(value),
                  );
                }).toList(),
              ),
            ),

            // Notification Toggle
            ListTile(
              title: Text('Notifications'),
              trailing: Switch(
                value: _isNotificationsEnabled,
                onChanged: (bool value) {
                  setState(() {
                    _isNotificationsEnabled = value;
                  });
                },
              ),
            ),

            // Account Section (Contacte)
            ListTile(
              title: Row(
                children: [
                  SizedBox(width: 8), // Space between the icon and the text
                  Text('Contacte telegram'),
                ],
              ),
              trailing: IconButton(
                icon: Image.network(
                  'https://raw.githubusercontent.com/aakrfja/learn-with-Khey_Math-Physics/main/telegram-icon.png', // Custom Telegram Icon
                  width: 24,
                  height: 24,
                ),
                onPressed: _launchURL1, // Trigger the URL launch for the second URL
              ),
            ),

            ListTile(
              title: Row(
                children: [
                  SizedBox(width: 8), // Space between the icon and the text
                  Text('Contacte Facebook'),
                ],
              ),
              trailing: IconButton(
                icon: Image.network(
                  'https://raw.githubusercontent.com/aakrfja/learn-with-Khey_Math-Physics/main/Facebook_icon.png', // Custom Telegram Icon (you can replace with a Facebook icon)
                  width: 24,
                  height: 24,
                ),
                onPressed: _launchURL2, // Trigger the URL launch for the first URL
              ),
            ),

            // Other Settings (e.g., logout)
ListTile(
              title: Text('Logout'),
              onTap: () {
                // Show logout dialog with options
                showDialog(
                  context: context,
                  builder: (BuildContext context) {
                    return AlertDialog(
                      title: Text('Are you sure you want to log out?'),
                      actions: [
                        // Cancel button (stay on the current screen)
                        TextButton(
                          onPressed: () {
                            Navigator.of(context).pop(); // Close the dialog and stay on the current screen
                          },
                          child: Text('Cancel'),
                        ),
                        // Logout button
                        TextButton(
                          onPressed: () {
                            // Implement logout logic here
                            Navigator.of(context).pop(); // Close the dialog
                            // You can replace the current screen with the login screen, for example:
                            Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(builder: (context) => LoginScreen()), // Navigate to login screen
                            );
                          },
                          child: Text('Log Out'),
                        ),
                          ],
                    );
                      },
                );
                  },
            ),
          ],
        ),
      ),
    );
  }
}
