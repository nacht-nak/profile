<?php

// 1️⃣ Make storage writable on Vercel
if (isset($_ENV['VERCEL'])) {
    $storagePath = '/tmp/storage/framework';
    $directories = [
        $storagePath . '/sessions',
        $storagePath . '/views',
        $storagePath . '/cache',
    ];

    foreach ($directories as $directory) {
        if (!is_dir($directory)) {
            mkdir($directory, 0755, true);
        }
    }

    // Update Laravel storage paths
    $_ENV['VIEW_COMPILED_PATH'] = $storagePath . '/views';
    $_ENV['SESSION_FILES'] = $storagePath . '/sessions';
    $_ENV['CACHE_PATH'] = $storagePath . '/cache';
}

// 2️⃣ Load Laravel
require __DIR__ . '/../public/index.php';