<?php

// 1️⃣ Make storage writable on Vercel
if (isset($_ENV['VERCEL'])) {
    $storagePath = '/tmp/storage/framework';
    $paths = [
        $storagePath . '/sessions',
        $storagePath . '/views',
        $storagePath . '/cache',
        $storagePath . '/logs',
    ];
    foreach ($paths as $path) {
        if (!is_dir($path)) mkdir($path, 0755, true);
    }

    // Update Laravel storage paths
    $_ENV['VIEW_COMPILED_PATH'] = $storagePath . '/views';
    $_ENV['SESSION_FILES'] = $storagePath . '/sessions';
    $_ENV['CACHE_PATH'] = $storagePath . '/cache';
    $_ENV['LOG_PATH'] = $storagePath . '/logs';
}

// 2️⃣ Load Composer autoloader
require __DIR__ . '/../vendor/autoload.php';

// 3️⃣ Bootstrap Laravel
$app = require_once __DIR__ . '/../bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);