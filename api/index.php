<?php

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Fix storage paths on Vercel (serverless has read-only filesystem except /tmp)
if (isset($_ENV['VERCEL']) || getenv('VERCEL')) {
    $storagePath = '/tmp/storage';
    $frameworkPath = $storagePath . '/framework';
    $paths = [
        $frameworkPath . '/sessions',
        $frameworkPath . '/views',
        $frameworkPath . '/cache',
        $frameworkPath . '/cache/data',
        $storagePath . '/logs',
        $storagePath . '/app/public',
    ];
    foreach ($paths as $path) {
        if (!is_dir($path)) mkdir($path, 0755, true);
    }
}

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = __DIR__ . '/../storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require __DIR__ . '/../vendor/autoload.php';

// Bootstrap Laravel and handle the request (Laravel 12 style)...
/** @var \Illuminate\Foundation\Application $app */
$app = require_once __DIR__ . '/../bootstrap/app.php';

// Override storage path to /tmp on Vercel
if (isset($_ENV['VERCEL']) || getenv('VERCEL')) {
    $app->useStoragePath('/tmp/storage');
}

$app->handleRequest(Request::capture());