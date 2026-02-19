import React from 'react';
import Modal from '@/Components/Modal';
import { __ } from "@/Libs/Lang";
import {
    IconBrandWindows,
    IconBrandApple,
    IconBrandUbuntu,
    IconX
} from '@tabler/icons-react';

export default function KeyboardSetupHelpModal({ show, onClose, keyboardLocale = 'ckb' }) {

    const isKurdish = keyboardLocale === 'ckb';

    return (
        <Modal show={show} onClose={onClose} maxWidth="2xl">
            <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 italic">
                        {isKurdish ? __("Keyboard Help") : __("English Keyboard Setup")}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                    >
                        <span className="sr-only">{__("Close")}</span>
                        <IconX size={24} stroke={2.5} />
                    </button>
                </div>

                <div className="space-y-10">
                    {/* Windows */}
                    <section>
                        <div className="flex items-center space-x-4 mb-5 rtl:space-x-reverse">
                            <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-2xl border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400">
                                <IconBrandWindows size={28} stroke={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                {__("Windows Instructions")}
                            </h3>
                        </div>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-400 list-none ml-2 rtl:mr-2 rtl:ml-0">
                            <li className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-7 h-7 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">1</span>
                                <span className="pt-0.5">{__("1. Go to Settings > Time & Language > Language & Region.")}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-7 h-7 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">2</span>
                                <span className="pt-0.5">
                                    {isKurdish ? __("2. Click 'Add a language' and search for 'Kurdish'.") : __("2. Click 'Add a language' and search for 'English'.")}
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-7 h-7 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">3</span>
                                <span className="pt-0.5">
                                    {isKurdish ? __("3. Select 'Kurdish (Central)' or 'Kurdish (Kurmanji)'.") : __("3. Select 'English (United States)' or your preferred variant.")}
                                </span>
                            </li>
                            {isKurdish && (
                                <li className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-7 h-7 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">4</span>
                                    <span className="pt-0.5">{__("4. Make sure 'Central Kurdish (Unicode)' keyboard is added.")}</span>
                                </li>
                            )}
                            {!isKurdish && (
                                <li className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-7 h-7 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">4</span>
                                    <span className="pt-0.5">{__("4. Make sure 'English (US)' keyboard is added.")}</span>
                                </li>
                            )}
                        </ul>
                    </section>

                    {/* macOS */}
                    <section>
                        <div className="flex items-center space-x-4 mb-5 rtl:space-x-reverse">
                            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                                <IconBrandApple size={28} stroke={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                {__("macOS Instructions")}
                            </h3>
                        </div>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-400 list-none ml-2 rtl:mr-2 rtl:ml-0">
                            <li className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-7 h-7 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">1</span>
                                <span className="pt-0.5">{__("1. Go to System Settings > Keyboard.")}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-7 h-7 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">2</span>
                                <span className="pt-0.5">{__("2. Click the '+' button under 'Input Sources'.")}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-7 h-7 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">3</span>
                                <span className="pt-0.5">
                                    {isKurdish ? __("3. Search for 'Kurdish' and select 'Kurdish - Central'.") : __("3. Search for 'English' and select 'ABC' or 'U.S.'.")}
                                </span>
                            </li>
                        </ul>
                    </section>

                    {/* Linux */}
                    <section>
                        <div className="flex items-center space-x-4 mb-5 rtl:space-x-reverse">
                            <div className="bg-orange-50 dark:bg-orange-900/30 p-3 rounded-2xl border border-orange-100 dark:border-orange-800 text-orange-600 dark:text-orange-400">
                                <IconBrandUbuntu size={28} stroke={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                {__("Linux Instructions")}
                            </h3>
                        </div>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-400 list-none ml-2 rtl:mr-2 rtl:ml-0">
                            <li className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-7 h-7 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">1</span>
                                <span className="pt-0.5">{__("1. Open your Keyboard Settings (varies by desktop environment like GNOME or KDE).")}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-7 h-7 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">2</span>
                                <span className="pt-0.5">
                                    {isKurdish ? __("2. Add 'Kurdish' as a layout.") : __("2. Add 'English (US)' as a layout.")}
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-7 h-7 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">3</span>
                                <span className="pt-0.5">
                                    {isKurdish ? __("3. Choose the 'Kurdish (Central)' or 'Kurdish (Standard)' layout.") : __("3. Choose the 'English (US)' layout.")}
                                </span>
                            </li>
                        </ul>
                    </section>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                    >
                        {__("Got it")}
                    </button>
                </div>
            </div>
        </Modal>
    );
}
