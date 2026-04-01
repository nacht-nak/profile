<?php

// Fix storage paths on Vercel
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

    // Set Laravel env for temporary storage
    $_ENV['VIEW_COMPILED_PATH'] = $storagePath . '/views';
    $_ENV['SESSION_FILES'] = $storagePath . '/sessions';
    $_ENV['CACHE_PATH'] = $storagePath . '/cache';
    $_ENV['LOG_PATH'] = $storagePath . '/logs';
}

require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();
$kernel->terminate($request, $response);