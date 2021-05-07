<?php
return [
    # Cockpit configuration
    # …

    # Use SQL Driver as main data storage
    'database' => [
        'server' => 'sqldriver',
        # Connection options
        'options' => [
            'connection' => 'mysql',         # One of 'mysql'|'pgsql'
            'host'       => 'localhost',     # Optional, defaults to 'localhost'
            'port'       => 3306,            # Optional, defaults to 3306 (MySQL) or 5432 (PostgreSQL)
            'dbname'     => 'vj654_cube',
            'username'   => 'vj654_cube',
            'password'   => '8K_h9H48rZ5'
        ],
        # Connection specific options
        # General: https://www.php.net/manual/en/pdo.setattribute.php
        # MySQL specific: https://www.php.net/manual/en/ref.pdo-mysql.php#pdo-mysql.constants
        'driverOptions' => [],
    ],
];