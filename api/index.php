<?php

// Vercel only has a writable /tmp directory.
// We need to ensure the framework storage directories exist there.
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
}

// Forward Vercel requests to normal index.php
require __DIR__ . '/../public/index.php';
